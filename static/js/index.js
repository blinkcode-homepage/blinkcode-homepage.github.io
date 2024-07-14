window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

const data = {
    labels: ['Algebra', 'Geometry', 'Logic', 'Topology', 'Statistics'],
    datasets: [
        {
            label: 'Human',
            data: [65, 59, 90, 81, 56],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'GPT4o',
            data: [28, 48, 40, 19, 96],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
        // 添加其他模型的数据
    ]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};

let myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function updateChart() {
    const select = document.getElementById('modelSelect');
    const selectedOptions = Array.from(select.selectedOptions).map(option => option.value);

    // 根据选择的选项过滤数据集
    if (selectedOptions.includes('all')) {
        myChart.data.datasets = data.datasets;
    } else {
        myChart.data.datasets = data.datasets.filter(dataset => selectedOptions.includes(dataset.label));
    }
    myChart.update();
}


