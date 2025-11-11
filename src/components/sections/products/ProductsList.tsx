// import ChatbotDemo from '@/components/ChatbotDemo';

// const ProductsList = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Athena",
//       description: "Pink satin dress with no sleeves",
//       image: "https://images.unsplash.com/photo-1595777712802-07e1b534abff?w=400&h=500&fit=crop",
//       rating: 4.4,
//       price: 999,
//       originalPrice: 2500,
//       discount: 15,
//       tags: ["Satin feel", "Hot pink"]
//     },
//     {
//       id: 2,
//       name: "Varanga",
//       description: "Pink organza dress",
//       image: "https://images.unsplash.com/photo-1595777712502-f4a0d10f98b1?w=400&h=500&fit=crop",
//       rating: 4.2,
//       price: 499,
//       originalPrice: 2500,
//       discount: 15,
//       tags: ["A-Line", "Comfort fit"]
//     },
//     {
//       id: 3,
//       name: "Mango",
//       description: "Black embroidered deep neck dress",
//       image: "https://images.unsplash.com/photo-1595777714533-f3b0a01fdbfa?w=400&h=500&fit=crop",
//       rating: 4.4,
//       price: 799,
//       originalPrice: 2500,
//       discount: 15,
//       tags: ["Mini", "Cotton"]
//     }
//   ];

//   const shoppingMessages = [
//     { 
//       id: 1, 
//       text: "I'm looking for a winter jacket that's warm but not too bulky", 
//       sender: 'user' as const, 
//       delay: 500 
//     },
//     { 
//       id: 2, 
//       text: "Great choice! I found some perfect options for you.", 
//       sender: 'bot' as const, 
//       delay: 1500 
//     },
//     { 
//       id: 3, 
//       text: "products", 
//       sender: 'bot' as const, 
//       delay: 2500,
//       isProductGrid: true,
//       products: products
//     },
//     { 
//       id: 4, 
//       text: "That sounds perfect! Give me the first one in size XL. Can I proceed to checkout?", 
//       sender: 'user' as const, 
//       delay: 5000 
//     },
//     { 
//       id: 5, 
//       text: "Absolutely! I've added the Athena dress in size XL to your cart. Let me take you to checkout. You'll get free shipping on this order, and it arrives in 2-3 days.", 
//       sender: 'bot' as const, 
//       delay: 6500 
//     },
//     { 
//       id: 6, 
//       text: "Perfect! I'll complete the purchase now.", 
//       sender: 'user' as const, 
//       delay: 8000 
//     },
//   ];

//   return (
//     <section className="py-20 px-4 md:px-6 bg-card/20">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-bold mb-6">
//               <span className="text-gradient">AI Shopping Assistant</span>
//             </h2>
//             <p className="text-lg text-muted-foreground mb-6">
//               Your personal shopping guide that understands your preferences and recommends products tailored to your needs.
//             </p>
//             <ul className="space-y-3">
//               <li className="flex gap-3">
//                 <span className="text-primary">✓</span>
//                 <span>Natural language search capabilities</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-primary">✓</span>
//                 <span>Personalized product recommendations</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-primary">✓</span>
//                 <span>Smart sizing and fit guidance</span>
//               </li>
//             </ul>
//           </div>
          
//           {/* Shopping Assistant Demo */}
//           <ChatbotDemo 
//             title="AI Shopping Assistant"
//             description="Product recommendations in action"
//             messages={shoppingMessages}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsList;

import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsList = () => {
  const products = [
    {
      id: 1,
      name: "Athena",
      description: "Pink satin dress with no sleeves",
      image: "https://images.unsplash.com/photo-1595777712802-07e1b534abff?w=400&h=500&fit=crop",
      rating: 4.4,
      price: 999,
      originalPrice: 2500,
      discount: 15,
      tags: ["Satin feel", "Hot pink"]
    },
    {
      id: 2,
      name: "Varanga",
      description: "Pink organza dress",
      image: "https://images.unsplash.com/photo-1595777712502-f4a0d10f98b1?w=400&h=500&fit=crop",
      rating: 4.2,
      price: 499,
      originalPrice: 2500,
      discount: 15,
      tags: ["A-Line", "Comfort fit"]
    },
    {
      id: 3,
      name: "Mango",
      description: "Black embroidered deep neck dress",
      image: "https://images.unsplash.com/photo-1595777714533-f3b0a01fdbfa?w=400&h=500&fit=crop",
      rating: 4.4,
      price: 799,
      originalPrice: 2500,
      discount: 15,
      tags: ["Mini", "Cotton"]
    }
  ];

  const shoppingMessages = [
    { 
      id: 1, 
      text: "I'm looking for a winter jacket that's warm but not too bulky", 
      sender: 'user' as const, 
      delay: 500 
    },
    { 
      id: 2, 
      text: "Great choice! I found some perfect options for you.", 
      sender: 'bot' as const, 
      delay: 1500 
    },
    { 
      id: 3, 
      text: "products", 
      sender: 'bot' as const, 
      delay: 2500,
      isProductGrid: true,
      products: products
    },
    { 
      id: 4, 
      text: "That sounds perfect! Give me the first one in size XL. Can I proceed to checkout?", 
      sender: 'user' as const, 
      delay: 5000 
    },
    { 
      id: 5, 
      text: "Absolutely! I've added the Athena dress in size XL to your cart. Let me take you to checkout. You'll get free shipping on this order, and it arrives in 2-3 days.", 
      sender: 'bot' as const, 
      delay: 6500 
    },
    { 
      id: 6, 
      text: "Perfect! I'll complete the purchase now.", 
      sender: 'user' as const, 
      delay: 8000 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Recommendation Agent</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our core AI agent that learns your preferences through natural conversation. Understand your style, budget, and occasion to deliver hyper-personalized product recommendations that feel handpicked just for you.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Natural language search capabilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Personalized product recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Smart sizing and fit guidance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Budget-aware filtering</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Learns from your preferences over time</span>
              </li>
            </ul>
          </div>
          
          {/* Shopping Assistant Demo */}
          <ChatbotDemo 
            title="Recommendation Agent"
            description="Personalized product discovery"
            messages={shoppingMessages}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsList;