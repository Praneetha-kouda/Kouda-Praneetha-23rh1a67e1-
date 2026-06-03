public class MethodOverloading {
    public static void main(String[] args) {
        int sum1 = add(5, 10);
        System.out.println("Sum of two integers (5 + 10): " + sum1);

        double sum2 = add(5.5, 10.5);
        System.out.println("Sum of two doubles (5.5 + 10.5): " + sum2);

        int sum3 = add(5, 10, 15);
        System.out.println("Sum of three integers (5 + 10 + 15): " + sum3);
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }
}