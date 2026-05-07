export const optimizeImage = (url?: string, width = 500) => {
  if (!url) return "/placeholder.png";

  if (!url.includes("/upload/")) return url;

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width}/`
  );
};

// 🔥 Blur version (tiny image)
export const blurImage = (url?: string) => {
  if (!url) return "/placeholder.png";

  if (!url.includes("/upload/")) return url;

  return url.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_10,e_blur:1000/"
  );
};