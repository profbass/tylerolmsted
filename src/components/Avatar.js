export default function Avatar() {
    return (
        <div className="rounded-full border-8 border-yellow shadow-xl hover: transform hover:scale-105 transition-all">
            <img
                src={process.env.PUBLIC_URL + `${process.env.PUBLIC_URL}/img/blog-author.jpg`}
                className="h-48 rounded-full sm:h-56"
                alt="author"
            />
        </div>
    );
}