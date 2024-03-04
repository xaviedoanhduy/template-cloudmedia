let timeLineIndex = 0;
let timelineVerticalIndex = 0;


const timeLineHistory = () => {
    const yearTimeLineHistory = $('.horizontal-timeline .events ol ul li a');
    
    yearTimeLineHistory.css('color', '#000000');
    yearTimeLineHistory.removeClass('active');

    timeLineIndex++;
    if (timeLineIndex > yearTimeLineHistory.length) {
        timeLineIndex = 1;
    }

    yearTimeLineHistory.eq(timeLineIndex - 1).css('color', '#0e80c3');
    yearTimeLineHistory.eq(timeLineIndex - 1).addClass('active');
    setTimeout(timeLineHistory, 1500);
};

const timelineVertical = () => { 
    const yearVerticalTimeLineHistory = $('.vertical-timeline h4');
    const circleVerticalTimeLine = $('.circle-vertical');

    yearVerticalTimeLineHistory.css('color', '#000000');
    circleVerticalTimeLine.css('background-color', '#000000');

    timelineVerticalIndex++;
    if (timelineVerticalIndex > yearVerticalTimeLineHistory.length) {
        timelineVerticalIndex = 1;
    }

    yearVerticalTimeLineHistory.eq(timelineVerticalIndex - 1).css('color', '#0e80c3');
    circleVerticalTimeLine.eq(timelineVerticalIndex - 1).css('background-color', '#0e80c3');
    setTimeout(timelineVertical, 1500);
}

timeLineHistory();
timelineVertical();

