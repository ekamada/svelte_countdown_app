


<div class='main'>
 <h1>
  Cool Cats Countdown
 </h1>
 
 <div class='countdown'>
  {result} <br>
  <div>
   {targetDate} <br>
   <form onsubmit={setNewTarget}>
     <input type='date' bind:value={targetDate}> <input type='time' bind:value={targetTime}> 
     <button type="submit">Confirm</button>
   </form>
  </div>
 </div>
 
 <!-- Empty div used for spacing -->
 <div></div>
</div>

   
<script lang="ts">
    import * as utils from '$lib/utils.js';

    const defaultDate = "Nov 17, 2025"
    const defaultTime = "19:30:00"

    let targetDate  = defaultDate
    let targetTime  = defaultTime
    let newDateTime = new Date(targetDate +" "+targetTime).getTime()
    let result : String = $state('')

    console.log(targetDate)
    console.log(targetTime)

    function setNewTarget() {
        console.log(targetDate)
        console.log(targetTime)
        newDateTime = new Date(targetDate+" "+targetTime).getTime()
    }



    setInterval(function() {
        result = utils.get_time_remaining(newDateTime)
        }, 1000)
</script>


<style>
    .main {
        height  : 100vh;
        font-family:'Courier New', Courier, monospace;
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        align-items     : center;
    }

    .countdown {
        font-size: 3em;    
        text-align: center;
    }

    .countdown p {
        font-size: 0.5em;
    }
</style>
