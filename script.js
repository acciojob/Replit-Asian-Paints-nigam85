//your JS code here. If required.
 const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('reset_button');
        const blockIdInput = document.getElementById('block_id');
        const colorIdInput = document.getElementById('color_id');
        const gridItems = document.querySelectorAll('.grid-item');

        changeButton.addEventListener('click', () => {
            const blockId = blockIdInput.value;
            const color = colorIdInput.value;

            if (blockId >= 1 && blockId <= 9) {
                gridItems.forEach(item => {
                    item.style.backgroundColor = 'transparent';
                });

                const targetItem = document.getElementById(blockId);
                targetItem.style.backgroundColor = color;
            } else {
                alert('Invalid Block ID. Please enter a number between 1 and 9.');
            }
        });

        resetButton.addEventListener('click', () => {
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        });
