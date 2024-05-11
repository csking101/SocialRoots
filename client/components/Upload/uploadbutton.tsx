"use client";
 
import { UploadButton } from "@/utils/uploadthing";
 
export default function ImageUpload() {
  return (
    <main className="rounded-lg border-2 p-2 border-white">
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