<style>
  .loading-chart {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-chart:after {
    content: "";
    border: 5px solid #333;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    opacity: 0;

    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
  }

  @keyframes pulsate {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
</style>

<div class="loading-chart" />
