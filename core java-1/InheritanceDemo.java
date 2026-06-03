class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Dog myDog = new Dog();

        myAnimal.makeSound();
        myDog.makeSound();
    }
}