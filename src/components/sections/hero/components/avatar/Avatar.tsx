import Image from 'next/image';

function Avatar() {
  return (
    <Image
      src="/avatar.webp"
      alt="Animated Avatar Image"
      width={0}
      height={0}
      sizes="(min-width: 1280px) 180px, (min-width: 1024px) 160px, (min-width: 768px) 156px, 120px"
      className="animate-float mt-10 w-30 max-w-64 object-contain sm:mt-10 sm:w-30 sm:justify-self-center md:mt-0 md:h-full md:w-39 lg:w-40 xl:w-45"
    />
  );
}

export default Avatar;
