import { Logo } from '@/assets/svgs';
import { Outlet, useLocation } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { onboardingSlides as slides } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Aside = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const isWelcome = pathname === '/onboarding/welcome';
  return (
    <section
      id="onboarding-slides"
      className="relative h-full hidden sm:flex flex-col justify-end pb-20 w-1/2 overflow-hidden rounded-xl bg-[url('/images/onboarding_bg.png')] bg-cover bg-center"
    >
      <motion.div
        className="absolute left-1/2 h-auto text-white"
        initial={false}
        animate={{
          width: isWelcome
            ? 'clamp(2.5rem, 7.112676rem + 12.319249vw, 18.2rem)'
            : '8.125rem',
          top: isWelcome ? '50%' : '5%',
          x: '-50%',
          y: isWelcome ? '-50%' : '0%',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
          type: 'tween',
        }}
      >
        <Logo className="w-full h-auto" />
      </motion.div>

      {/* Swiper Component */}
      <AnimatePresence>
        {!isWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-center text-white"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000 }}
              speed={1000}
              centeredSlides={true}
              loop={true}
              spaceBetween={160}
              className="max-w-[90%]"
            >
              {slides.map(({ id, heading, text }) => (
                <SwiperSlide key={id}>
                  <h1 className="mb-[1.12rem] font-bold clamp-[text,xl,3xl]">
                    {heading}
                  </h1>
                  <p className="mx-auto max-w-115 clamp-[text,base,lg]">
                    {text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const MainOnboardingLayout = ({
  className,
  showLogoOnDesktop = true,
}: {
  className?: string;
  showLogoOnDesktop?: boolean;
}) => (
  <section
    className={cn(
      'flex flex-col justify-center items-center w-full relative grow clamp-[pt,16,24] pb-16',
      className,
    )}
  >
    <Logo
      className={cn(
        'w-32.5 text-primary absolute clamp-[top,5,12] left-1/2 -translate-x-1/2',
        !showLogoOnDesktop && 'sm:hidden',
      )}
    />
    <div className="mx-auto w-full max-w-[27.63rem] text-center -mt-8">
      <Outlet />
    </div>

    <p className="text-[0.625rem] text-grey-400 text-center absolute bottom-4 inset-x-0">
      By signing up to create an account I accept Company’s Terms of use &
      Privacy Policy. <br />
      <span className="text-mavride-violet">
        Terms of use & Privacy Policy.
      </span>
    </p>
  </section>
);

export { Aside, MainOnboardingLayout };
