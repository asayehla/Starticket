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

    </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">

// .container {
//     max-width: 1000px;
//     background: #eee;
//     display: grid; 
//     grid-template-columns: repeat(3, 1fr); 
//     grid-template-rows: minmax(240px, auto);
// }

// table {
//     background-color: peachpuff; 
//     padding: 1rem;
//     font-weight: bold;
    
//     th {
//         color: violet;
//         text-transform: uppercase;
//         border-bottom: solid 1px white;
//     }
// }

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
</style>
