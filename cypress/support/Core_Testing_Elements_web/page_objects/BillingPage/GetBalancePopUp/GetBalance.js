const radioBtnSelector = 'button.jss36.jss53[role="radio"][aria-checked="true"]';
const confirmButtonXPath = '/html/body/div[2]/div[3]/div/div/div/section/div[2]/button';

/**
 * Class representing the operations for getting balance pop-up.
 */
class GetBalancePopUp {

    /**
     * Select the first available card.
     */
    SelectAvailableCard() {
        // Количество кликов
        const numberOfClicks = 5; // Замените на нужное количество кликов

        cy.window().then((win) => {
            // Указываем конкретные координаты, на которые нужно навести мышь
            const x = 557;
            const y = 256;

            // Симулируем перемещение мыши на заданные координаты
            cy.get('body').trigger('mousemove', {clientX: x, clientY: y});

            // Проходим цикл для нескольких кликов
            for (let i = 0; i < numberOfClicks; i++) {
                // Симулируем клик мышью на заданных координатах
                cy.get('body').trigger('click', {clientX: x, clientY: y});

                // Ждем небольшую паузу между кликами (опционально)
                cy.wait(500);
            }

            cy.log(`Moved mouse to coordinates (${x}, ${y}) and clicked ${numberOfClicks} times`);
        });

        cy.wait(10000);  // Ожидание 10 секунд, чтобы увидеть результат
    }
}
export default GetBalancePopUp;
