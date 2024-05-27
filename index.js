const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

document.addEventListener('DOMContentLoaded', () => {
    const showMoreWords = document.querySelectorAll('.show-more-word');

    showMoreWords.forEach(showMoreWord => {
        showMoreWord.addEventListener('click', () => {
            const serviceItem = showMoreWord.closest('.service-item');
            const moreContent = serviceItem.querySelector('.more-content');

            if (moreContent.style.maxHeight && moreContent.style.maxHeight !== '0px') {
                moreContent.style.maxHeight = '0';
                setTimeout(() => {
                    moreContent.style.display = 'none';
                    showMoreWord.textContent = 'Show More';
                    serviceItem.style.maxHeight = '';
                    serviceItem.style.paddingBottom = '';
                }, 500); // Match the CSS transition duration
            } else {
                moreContent.style.display = 'block';
                setTimeout(() => {
                    moreContent.style.maxHeight = moreContent.scrollHeight + 'px';
                }, 10); // Small delay to ensure display block takes effect
                showMoreWord.textContent = 'Show Less';
                serviceItem.style.maxHeight = serviceItem.scrollHeight + moreContent.scrollHeight + 'px';
                serviceItem.style.paddingBottom = '20px'; // Adjust based on your content's padding needs
            }
        });
    });
});

