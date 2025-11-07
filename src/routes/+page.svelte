


<div class='main'>
 <h1>
  Cool Cats Countdown
 </h1>
 
 <div class='countdown'>
  {timeRemaining} <br>
  <div>
   {utils.dateFormat.format(displayDate)} <br>
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
    import * as utils   from '$lib/utils.js';
    import {SvelteDate} from 'svelte/reactivity'

    // Initial Values
    const defaultDate = "Nov 20, 2025"
    const defaultTime = "19:30:00"

    // The reactivity of targetDate/targetTime is handled through the binding of
    // these variables to the html <input>. because of this, the $state() rune
    // is not needed
    let targetDate     = defaultDate
    let targetTime     = defaultTime
    let targetDateObj   = new Date(defaultDate)

    let displayDate     = $state(new SvelteDate(new Date(targetDate)))
    let newDateTime     = new Date(targetDate +" "+targetTime).getTime()
    let timeRemaining : String = $state('')

    setInterval(function() {
        timeRemaining = utils.get_time_remaining(newDateTime)
        }, 1000)

    function setNewTarget() {
        console.log(targetDate)
        console.log(targetTime)
        targetDateObj = new Date(targetDate)
        displayDate.setTime(targetDateObj.getTime())
        
        newDateTime = new Date(targetDate+" "+targetTime).getTime()
    }




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

    .countdown div {
        font-size: 0.7em;
    }
</style>
