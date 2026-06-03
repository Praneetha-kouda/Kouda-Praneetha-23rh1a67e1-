public class TypeCastingExample {
    public static void main(String[] args) {
       
        double originalDouble = 89.75;
        System.out.println("Original double value: " + originalDouble);

        
        int castedInt = (int) originalDouble;
        System.out.println("Casted int value (fractional part truncated): " + castedInt);

        int originalInt = 150;
        System.out.println("\nOriginal int value: " + originalInt);

        
        double castedDouble = originalInt; 
        System.out.println("Casted double value: " + castedDouble);
    }
}