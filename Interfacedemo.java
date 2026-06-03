interface Playable {
    void play();
}

class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Playing guitar melodies...");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Playable myInstrument = new Guitar();
        myInstrument.play();
    }
}