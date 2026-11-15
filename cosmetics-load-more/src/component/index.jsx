
import { useState } from "react";

function Index({ products }) {
    const [visibleProducts, setVisibleProducts] = useState(10);

    function showMore() {
        setVisibleProducts(previous => previous + 10);
    }

    function resetProducts() {
        setVisibleProducts(10);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        
<div className="min-h-screen bg-[#faf6f3] text-[#392b2c]">

    {/* Announcement Bar */}
    <div className="bg-[#542f3b] px-4 py-2 text-center text-xs tracking-[0.2em] text-white">
        A LITTLE BEAUTY, A LITTLE LUXURY — EVERY DAY
    </div>

    {/* Navbar */}
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eadfda] bg-[#fffdfb] px-4 py-5 md:px-12">

        {/* Logo */}
        <a href="#" className="font-serif text-3xl font-bold tracking-wider">
            ÉLORA<span className="text-[#bd858b]">.</span>
        </a>

        {/* Navigation Links */}
        <div className="flex gap-4 text-[10px] font-medium uppercase tracking-widest text-[#755b5b] sm:gap-6 sm:text-xs">
            <a href="#" className="transition hover:text-[#bd858b]">Home</a>
            <a href="#collection" className="transition hover:text-[#bd858b]">Collection</a>
            <a href="#about" className="transition hover:text-[#bd858b]">Our Story</a>
        </div>

        {/* Shop Button */}
        <a href="#collection"
            className="border border-[#542f3b] px-3 py-2 text-[10px] uppercase tracking-widest transition hover:bg-[#542f3b] hover:text-white sm:px-5 sm:text-xs">
            Shop Now
        </a>

    </nav>

    {/* Hero Section */}
    <header className="relative overflow-hidden bg-[#ead9d3]">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">

            <div className="relative z-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#a36d75]">
                    The Art of Self Care
                </p>

                <h1 className="font-serif text-5xl leading-[1.15] text-[#542f3b] sm:text-6xl lg:text-7xl">
                    Feel beautiful.
                    <span className="mt-2 block italic text-[#a66e78]">
                        Be yourself.
                    </span>
                </h1>

                <p className="mt-7 max-w-md text-sm leading-7 text-[#725c59]">
                    Discover a world of beauty essentials.
                    Find the little things that make you feel
                    confident, radiant, and completely yourself.
                </p>

                <a
                    href="#collection"
                    className="mt-9 inline-flex items-center gap-4 bg-[#542f3b] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#754553]"
                >
                    Explore the collection
                    <span>→</span>
                </a>
            </div>

            {/* Decorative Hero Artwork */}
            <div className="relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center md:h-[440px]">

                <div className="absolute h-72 w-72 rounded-full bg-[#f8eeea] md:h-96 md:w-96"></div>

                <div className="absolute h-60 w-60 rounded-full border border-[#c89da0] md:h-80 md:w-80"></div>

                <div className="relative text-center">
                    <p className="font-serif text-7xl italic text-[#a66e78] md:text-8xl">
                        É.
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#755b5b]">
                        Beauty begins with you
                    </p>
                </div>

                <span className="absolute right-3 top-10 font-serif text-4xl text-[#a66e78]">
                    ✳
                </span>

                <span className="absolute bottom-10 left-4 font-serif text-4xl text-[#a66e78]">
                    ✳
                </span>
            </div>

        </div>
    </header>


{/* Benefits Strip */}
<section className="grid grid-cols-1 border-b border-[#eadfda] bg-[#fffdfb] py-6 text-center sm:grid-cols-3">

    <div className="border-b border-[#eadfda] py-3 sm:border-b-0 sm:border-r">
        <p className="font-serif text-lg">A Touch of Luxury</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-[#a58a83]">
            Beauty in every detail
        </p>
    </div>

    <div className="border-b border-[#eadfda] py-3 sm:border-b-0 sm:border-r">
        <p className="font-serif text-lg">Made for You</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-[#a58a83]">
            Celebrate your uniqueness
        </p>
    </div>

    <div className="py-3">
        <p className="font-serif text-lg">Your Beauty Ritual</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-[#a58a83]">
            Love your everyday moments
        </p>
    </div>

</section>

{/* Product Collection */}
<main id="collection" className="mx-auto max-w-7xl px-5 py-16 md:px-12 md:py-24">

    <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b17b82]">
            A Curated Selection
        </p>

        <h2 className="font-serif text-4xl text-[#542f3b] md:text-5xl">
            The Beauty Edit
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#8a7771]">
            Your next favorite is waiting to be discovered.
            Explore our collection and find your beauty essentials.
        </p>

        <div className="mx-auto mt-6 h-px w-16 bg-[#bd858b]"></div>
    </div>

    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-serif text-xl text-[#542f3b]">
            All Products
        </h3>

        <p className="text-xs tracking-wide text-[#927d76]">
            {Math.min(visibleProducts, products.length)} of {products.length} items
        </p>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.slice(0, visibleProducts).map((product) => (

            <article key={product.id} className="group">

                {/* Image */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#f0e7e2] p-7">

                    {product.discountPercentage > 0 && (
                        <span className="absolute left-3 top-3 z-10 bg-[#542f3b] px-3 py-1.5 text-[10px] uppercase tracking-widest text-white">
                            Sale
                        </span>
                    )}

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#542f3b]/95 py-3 text-center text-xs uppercase tracking-[0.2em] text-white transition duration-300 group-hover:translate-y-0">
                        Beauty Essential
                    </div>

                </div>

                {/* Product Details */}
                <div className="px-1 pt-5">

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b17b82]">
                        {product.category}
                    </p>

                    <h3 className="min-h-12 font-serif text-lg leading-6 text-[#49383a] transition group-hover:text-[#ad727b]">
                        {product.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between border-t border-[#e9deda] pt-3">

                        <p className="text-base font-semibold text-[#542f3b]">
                            ${product.price}
                        </p>

                        <p className="text-xs text-[#a17e72]">
                            ★ {product.rating}
                        </p>

                    </div>

                </div>

            </article>

        ))}

    </div>

    {/* Empty Products Message */}
    {products.length === 0 && (
        <div className="py-16 text-center">
            <p className="font-serif text-2xl text-[#542f3b]">
                No products found
            </p>
            <p className="mt-2 text-sm text-[#927d76]">
                Please check back later.
            </p>
        </div>
    )}

    {/* Load More and Reset */}
    <div className="mt-16 flex flex-wrap justify-center gap-4">

        {visibleProducts < products.length && (
            <button
                onClick={showMore}
                className="bg-[#542f3b] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#754553] hover:shadow-lg"
            >
                Discover More
            </button>
        )}

        {visibleProducts > 10 && (
            <button
                onClick={resetProducts}
                className="border border-[#542f3b] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#542f3b] transition hover:bg-[#ead9d3]"
            >
                Reset Collection
            </button>
        )}

    </div>

</main>

</div>

    );
}

export default Index;
