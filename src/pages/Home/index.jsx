import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import SearchBar from "../../components/SearchBar";

const Home = () => {
return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
            {/* <SearchBar /> */}
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to ReelCine</h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                Watch your favorite movies and TV shows here.
            </p>
        </main>
        <Footer />
    </div>
);
};

export default Home;
