import { MinusIcon, PlusIcon, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function Cart() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    clearCart();
  };

  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
    toast.info('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Add some items to get started!</p>
        <Button asChild variant="outline" size="lg">
          <a href="/">Continue Shopping</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Button 
          variant="outline" 
          onClick={() => {
            clearCart();
            toast.info('Cart cleared');
          }}
        >
          Clear Cart
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="flex-row items-center gap-6 p-6">
              <div className="w-32 h-32 relative overflow-hidden rounded-lg bg-muted/10 p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full transition-transform hover:scale-110"
                />
              </div>
              <div className="flex-grow space-y-2">
                <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                <p className="text-lg font-semibold text-primary">${item.price}</p>
              </div>
            </CardHeader>
            <CardContent className="border-t bg-muted/5 p-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center rounded-lg border bg-background">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-r-none h-12 w-12 transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() =>
                      handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    <MinusIcon className="h-6 w-6" />
                  </Button>
                  <div className="w-16 text-center text-lg font-medium">{item.quantity}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-l-none h-12 w-12 transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <PlusIcon className="h-6 w-6" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-destructive hover:text-destructive-foreground hover:bg-destructive transition-colors"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Trash2 className="h-6 w-6" />
                </Button>
                <div className="ml-auto text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <Card className="bg-primary-foreground">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            className="w-full" 
            size="lg"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}