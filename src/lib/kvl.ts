export const WHATSAPP_NUMBER = "5514998106597";
export const WHATSAPP_DISPLAY = "(14) 99810-6597";
export const INSTAGRAM_URL = "https://www.instagram.com/lojakvl.ofc/";
export const INSTAGRAM_HANDLE = "@lojakvl.ofc";

export function whatsappLink(message = "Olá! Vim pelo site da KVL Grife e quero saber mais sobre as peças.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
