export function OrderFooter({ text }: { text: string }) {
  return (
    <footer className="bg-brown px-5 py-5 sm:px-10 lg:px-16">
      <p className="mx-auto max-w-[1440px] text-[14px] leading-[1.45] text-cream-deep sm:text-[15px]">
        {text}
      </p>
    </footer>
  )
}
