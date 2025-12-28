import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "919301592158";
  const message = encodeURIComponent("Hi! I'm interested in ERPNext services for my business.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-4 py-3 rounded-full shadow-lg hover:bg-[hsl(142,70%,40%)] transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline group-hover:inline transition-all">
        WhatsApp Chat
      </span>
    </a>
  );
};
