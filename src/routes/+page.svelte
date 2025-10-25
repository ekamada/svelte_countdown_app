

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
    const targetDate = "Nov 3, 2025 19:30:00"
    const targetTime = new Date(targetDate).getTime()

    let result : String = $state('')

    setInterval(function() {
        let now = new Date().getTime()
        let difference = targetTime-now

        // converting from ms to units that are easier to understand 
        const days    = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours   = Math.floor(difference % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
        const minutes = Math.floor(difference % (1000 * 60 * 60)/(1000 * 60))
        const seconds = Math.floor(difference % (1000 * 60 )/(1000))

        result = days +"d : "+ hours +"h : "+ minutes +"m : "+ seconds + "s "
        
    },1000)
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
