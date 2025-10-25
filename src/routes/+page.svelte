

<div class='test'>
 <h1>
  Cool Cats Countdown
 </h1>
 
 <div class='countdown'>
  {result} <br>
  <p>
   {targetDate}
  </p>
 </div>
 

 <!-- Empty div used for spacing -->
 <div></div>
</div>


   
<script lang="ts">
    import * as utils from '$lib/utils.js';

    const targetDate = "Nov 4, 2025 19:30:00"
    const targetTime = new Date(targetDate).getTime()

    let result : String = $state('')

    setInterval(function() {
        result = utils.get_time_remaining(targetTime)
        }, 1000)

</script>


<style>

    .test {
        height  : 100vh;
        font-family:'Courier New', Courier, monospace;
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        align-items     : center;
    }

    .countdown {
        font-size: 3em;    
    }

    .countdown p {
        font-size: 0.5em;
        text-align: center;
    }

</style>
