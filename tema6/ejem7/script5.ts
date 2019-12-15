{
   function f3(x?: number): string {
       return x.toString();
   }

   function f4(x?: number): string {
       return x? x.toString() : "";
   }
}