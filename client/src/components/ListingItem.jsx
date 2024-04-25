import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0] || "https://media.istockphoto.com/id/1498811925/photo/real-estate-agent-or-real-estate-agent-was-holding-the-key-to-the-new-landlord-tenant-or.webp?b=1&s=170667a&w=0&k=20&c=llN8VkgxCJN89WHiL3yByIiQ7HlWSEaHvpTMV_g5Y9U="}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />

        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-blue-900 ">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-blue-900 truncate w-full">{listing.address}</p>
          </div>

          <p className="text-sm text-blue-900 line-clamp-2">
            {listing.description}
          </p>

          <p className="text-blue-900 mt-2 font-semibold">
            &#8377;{' '}
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-IN")
              : listing.regularPrice.toLocaleString("en-IN")}
              {listing.type === 'rent' && ' / month'}
          </p>
          <div className="text-blue-900 flex gap-5">
            <div className="font-bold text-xs">
                {listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms ` : `${listing.bedrooms} bedroom `}
            </div>
            <div className="font-bold text-xs">
                {listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms ` : `${listing.bathrooms} bathroom `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
