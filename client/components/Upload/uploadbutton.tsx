"use client";
 
import { UploadButton } from "@/utils/uploadthing";
 
export default function ImageUpload() {
  return (
    <main className="rounded-xl p-2 border-white bg-red-500">
      <UploadButton
        endpoint="mediaPost"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}