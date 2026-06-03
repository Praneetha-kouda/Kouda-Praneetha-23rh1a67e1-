import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        int randomNumber = (int) (Math.random() * 100) + 1;
        int userGuess = 0;
        int totalAttempts = 0;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I have generated a random number between 1 and 100. Try to guess it!");

        
        while (userGuess != randomNumber) {
            System.out.print("Enter your guess: ");
            userGuess = scanner.nextInt();
            totalAttempts++;


            if (userGuess > randomNumber) {
                System.out.println("Too high! Try a lower number.");
            } else if (userGuess < randomNumber) {
                System.out.println("Too low! Try a higher number.");
            } else {
                System.out.println("\nCongratulations! You guessed the correct number: " + randomNumber);
                System.out.println("It took you a total of " + totalAttempts + " attempts.");
            }
        }

        scanner.close();
    }
}