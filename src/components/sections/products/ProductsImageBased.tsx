import { Upload, Image as ImageIcon, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductsImageBased = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Image-Based Discovery</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Upload a photo and let our visual intelligence find exactly what you're looking for—or discover similar and complementary products that match your style.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Similar Products</h3>
                <p className="text-muted-foreground">Find exact style matches from our catalog with advanced visual recognition.</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Complementary Items</h3>
                <p className="text-muted-foreground">Discover products that pair perfectly with your selection—complete your look effortlessly.</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Trend-Based Matching</h3>
                <p className="text-muted-foreground">Get matched with trending products that align with your visual preferences.</p>
              </div>
            </div>

            <Button size="lg">
              <Upload className="w-4 h-4 mr-2" />
              Try Visual Search
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {/* Visual Demo Card 1 */}
            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 text-center">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-primary/60" />
                <p className="text-muted-foreground">Upload your image</p>
                <p className="text-sm text-muted-foreground mt-2">JPG, PNG up to 10MB</p>
              </div>
            </div>

            {/* Visual Demo Card 2 - Similar Products */}
            <div className="relative h-32 rounded-lg overflow-hidden bg-card border border-border p-4 flex items-center gap-4">
              <div className="w-20 h-20 rounded bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Instant Matches Found</h4>
                <p className="text-sm text-muted-foreground">12 similar products + 8 complementary items ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsImageBased;