import { ThumbsUp } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  originalPrice: number;
  discount: number;
  tags: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  image,
  rating,
  price,
  originalPrice,
  discount,
  tags,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all w-full max-w-xs">
      {/* Image Container */}
      <div className="relative bg-gradient-to-br from-purple-100 to-purple-50 aspect-square flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <span>★</span>
          <span>{rating}</span>
        </div>
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ₹{originalPrice}
          </span>
          <span className="text-2xl font-bold text-[#20d9a3]">
            ₹{price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-gray-100 text-gray-900 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Add to Compare
          </button>
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Like Button */}
        <div className="flex justify-end pt-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ThumbsUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;