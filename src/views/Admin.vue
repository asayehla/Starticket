<template lang="html">
    <main>
    <section>
        <h1>Admin Page</h1>
    </section>
    <table id="customers">
        <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Still Avalible</th>
            <th>Sold Tickets</th>
        </tr>
        <tr>
            <td>Lasse Stefans</td> <!-- <td>{{item.name}}}</td> -->
            <td>Globen</td>   <!-- <td>{{item.where}}}</td> -->
            <td>20</td> <!-- <td>{{item.still}}}</td> -->
            <td>1000</td>   <!-- <td>{{item.sold}}}</td> -->
        </tr>
        <tr>
            <td>Carola</td>
            <td>Parken</td>
            <td>500</td>
            <td>200</td>
        </tr>
        <tr>
            <td>Rolandz</td>
            <td>Partille Arena</td>
            <td>450</td>
            <td>12</td>
        </tr>
        <tr>
            <td>Sahara Hotnights</td>
            <td>Friends Arena</td>
            <td>200</td>
            <td>34</td>
        </tr>
        <tr>
            <td>Robyn</td>
            <td>Globen</td>
            <td>876</td>
            <td>12</td>
        </tr>
    </table>
    <section class="add-event">
    <h2>Add event</h2>
    <form>
        <input type="text" name="firstname" placeholder="Name">
        <input type="text" name="where" placeholder="Where">
        <input type="text" name="date" placeholder="Date">
        <input type="number" name="from" placeholder="From time">
        <input type="number" name="to" placeholder="To time">
        <input type="text" name="seats" placeholder="#seats">
        <input type="submit" value="Add the event">
    </form> 
    </section>

    </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">


#customers {
  border-collapse: collapse;
  width: 1000px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #eee;}

#customers tr {background-color: #eee;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

.add-event {
    max-width: 200px;
    background: rebeccapurple;
    margin: 2em auto;
    display: grid; 

}
</style>
