import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int count = scanner.nextInt();

        double[] numbers = new double[count];
        System.out.println("Enter the elements:");
        for (int i = 0; i < count; i++) {
            numbers[i] = scanner.nextDouble();
        }

        double sum = 0;
        for (int i = 0; i < count; i++) {
            sum += numbers[i];
        }

        double average = count > 0 ? sum / count : 0;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);

        scanner.close();
    }
}