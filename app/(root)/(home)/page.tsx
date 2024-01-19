import NoResult from "@/components/NoResult";
import AnnonceCard from "@/components/cards/AnnonceCard";
import GlobalSearchBar from "@/components/shared/GlobalSearchBar";
import HomeFilter from "@/components/shared/HomeFilter";
import { getAnnonces } from "@/lib/actions/annonce.action";

export default async function Home() {
  const result = await getAnnonces({});

  return (
    <div className="container mx-auto p-4">
  <GlobalSearchBar />
  <HomeFilter />

  <div className="mt-8">
    <h3 className="mb-4 text-2xl font-semibold">All Articles</h3>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {result && result.annonces && result.annonces.length > 0 ? (
        result.annonces.map((annonce) => (
          <AnnonceCard
            key={annonce._id}
            _id={annonce._id}
            title={annonce.title}
            price={annonce.price}
            imageUrl={annonce.imageUrl}
            author={annonce.author}
            createdAt={annonce.createdAt}
          />
        ))
      ) : (
        <NoResult link="/publier-annonce" linkTitle="Publier an Annonce" />
      )}
    </div>
  </div>
</div>
  );
}
