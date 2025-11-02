Aplikacja React wykorzystująca GPS

Aplikacja React może uzyskać aktualną lokalizację użytkownika, czyli szerokość i długość geograficzną.
Odbywa się to za pomocą wbudowanego API Geolocation, które uzyskuje dostęp do usług systemowych przeglądarki (na komputerze lub telefonie).

Jak to działa
1. Sprawdzanie dostępności geolokalizacji

Najpierw aplikacja sprawdza, czy przeglądarka obsługuje usługi lokalizacji.
Jeśli funkcja jest niedostępna (np. w starszej przeglądarce), wyświetlany jest następujący komunikat:

„Geolokalizacja niedostępna w tej sprawie”.

2. Sprawdzanie uprawnień

Przeglądarka nie może określić lokalizacji użytkownika bez jego zgody.
Gdy aplikacja wywołuje navigator.geolocation.getCurrentPosition(), pojawia się okno dialogowe z pytaniem:

„Czy zezwolić tej stronie na dostęp do lokalizacji?”
Jeśli użytkownik odmówi, aplikacja wyświetla komunikat o błędzie.

3. Pobieranie współrzędnych

Jeśli użytkownik wyraził zgodę, przeglądarka zwraca dwie wartości:

szerokość geograficzna — szerokość geograficzna

długość geograficzna — długość geograficzna

Te wartości są przekazywane do stanu React (poprzez useState) i wyświetlane na ekranie.

Przykład wyświetlania danych
Szerokość: 50.06143
Długość: 19.93658

Testowanie
Dodawanie logiki

Do działania tej funkcji wystarczy standardowy kod JavaScript — nie są wymagane żadne dodatkowe biblioteki.

Przykładowa funkcja:
navigator.geolocation.getCurrentPosition(
(position) => {
setLatitude(position.coords.latitude);
setLongitude(position.coords.longitude);
},
(error) => {
alert('Lokalizacja niemożliwa: ' + error.message);
}
);

Uruchamianie w przeglądarce

Po kliknięciu przycisku „Pobierz lokalizację” aplikacja poprosi o pozwolenie i wyświetli aktualne współrzędne użytkownika.