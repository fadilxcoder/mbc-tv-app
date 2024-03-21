const tvChannelsSelectOption = document.getElementById('tv-channels');
const videoSrc = document.getElementById('stream-identifier');
tvChannelsSelectOption.addEventListener('change', function() {
    const selectedOptionValue = tvChannelsSelectOption.value;
    videoSrc.src = selectedOptionValue;
});
