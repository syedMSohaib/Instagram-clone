import React, { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { db, storage } from "../firebase";
import {
  addDoc,
  doc,
  setDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function AddPostModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [file, setfile] = useState(null);
  const filePickerRef = useRef(null);
  const [loading, setloading] = useState(false);
  const postCaption = useRef(null);
  const session = useSession();

  const savePost = async () => {
    if (loading) return;
    setloading(true);
    // getting  the data from session
    let data = session.data;
    // adding the data to post collection
    const documentRef = await addDoc(collection(db, "posts"), {
      username: data.user.username,
      name: data.user.name,
      caption: postCaption.current.value,
      profile: data.user.image,
      timestamp: serverTimestamp(),
    }).catch((err) => {
      console.log(err);
      return;
    });

    console.log("Post is created with Ref ID: ", documentRef.id);

    const imageRef = ref(storage, `posts/${documentRef.id}/image/`);

    await uploadString(imageRef, file, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "posts", documentRef.id), {
        image: downloadURL,
      });
    });

    setOpen(false);
    setloading(false);
    setfile();
    postCaption.current.value = "";
  };

  const handleChangeFile = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (event) => {
      setfile(event.target.result);
    };
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="mb-10  text-center text-lg font-medium leading-6 text-gray-900"
              >
                Create a new Post
              </Dialog.Title>

              {file ? (
                <div className="w-full h-[300px]">
                  <img src={file} className="h-full w-full object-contain" />
                </div>
              ) : (
                ""
              )}

              <div className="mt-4 text-center grid place-items-center">
                <img
                  src="/images/upload-post.png"
                  className="h-20 cursor-pointer"
                  onClick={() => filePickerRef.current.click()}
                />
                <p className="text-sm text-gray-500">Click to Upload file</p>
                <input
                  ref={postCaption}
                  className="w-full mt-10 h-10 border border-gray-300 pl-3 focus:outline-none"
                  type="text"
                  placeholder="Enter your caption..."
                />
              </div>

              <div>
                <input
                  ref={filePickerRef}
                  onChange={handleChangeFile}
                  type={"file"}
                  hidden
                />
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={savePost}
                >
                  {loading ? "Uploading..." : "Post"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
