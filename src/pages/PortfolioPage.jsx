import { useEffect, useMemo, useState } from 'react';
import Seo from '../components/Seo';
import SectionReveal from '../components/SectionReveal';
import GalleryGrid from '../components/GalleryGrid';
import Lightbox from '../components/Lightbox';
import galleryImages from '../data/galleryImages';

const categories = ['All', 'Wedding', 'Nature', 'Portrait', 'Travel'];

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = useMemo(function () {
    if (activeCategory === 'All') {
      return galleryImages;
    }

    return galleryImages.filter(function (item) {
      return item.category === activeCategory;
    });
  }, [activeCategory]);

  useEffect(
    function () {
      setLightboxIndex(null);
    },
    [activeCategory]
  );

  function showPrevious() {
    setLightboxIndex(function (currentIndex) {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  }

  function showNext() {
    setLightboxIndex(function (currentIndex) {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % filteredImages.length;
    });
  }

  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse Alex Monroe's portfolio with wedding, travel, portrait, and nature photography in an elegant masonry gallery."
      />

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-32 md:px-8">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Portfolio</p>
          <h1 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">Stories Through Light</h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Explore curated galleries across weddings, portraits, nature, and travel work. Click any image to view it in full
            detail.
          </p>
        </SectionReveal>

        <SectionReveal delay={100} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(function (category) {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={function () {
                    setActiveCategory(category);
                  }}
                  className={
                    'rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ' +
                    (isActive
                      ? 'border-charcoal bg-charcoal text-white'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-charcoal hover:text-charcoal')
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={180} className="mt-8">
          <GalleryGrid
            images={filteredImages}
            onImageClick={function (index) {
              setLightboxIndex(index);
            }}
          />
        </SectionReveal>
      </section>

      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={function () {
          setLightboxIndex(null);
        }}
        onPrev={showPrevious}
        onNext={showNext}
      />
    </>
  );
}

export default PortfolioPage;
