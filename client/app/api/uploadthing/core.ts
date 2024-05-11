import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  // Takes up to 4 2mb images and/or 1 256mb video
  mediaPost: f({
    image: { maxFileSize: "2MB", maxFileCount: 4 },
    // video: { maxFileSize: "256MB", maxFileCount: 1 },
  })
    // .middleware(({ req }) => auth(req))
    .onUploadComplete((data) => console.log("file", data)),

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;