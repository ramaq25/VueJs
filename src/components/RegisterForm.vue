<template>
    <div>
        Name: <input type="text">
    </div>
    <div class="selects">
        <label>Role:</label>
        <select v-model="role">
            <option value="student">Student</option> 
            <option value="professor">Professor</option> 
            <option value="other">Other</option> 
        </select>
    </div>
    <div>
        <input type="checkbox" value="basketball" v-model="sport">
        <label>Basketball</label>
        <input type="checkbox" value="football"  v-model="sport">
        <label>Football</label>    
    </div>
    <div class="button">
        <button class="submit" type="submit">Submit</button>
    </div>
       

</template>

<style>
    div {
        margin: 15px;
    }
</style>