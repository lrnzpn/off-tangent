<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
          Participants (7)
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" @click="close">
            <path d="M8.5625 6.06897L11.6875 2.94397C12.0938 2.56897 12.0938 1.94397 11.6875 1.56897L11 0.88147C10.625 0.47522 10 0.47522 9.625 0.88147L6.5 4.00647L3.34375 0.88147C2.96875 0.47522 2.34375 0.47522 1.96875 0.88147L1.28125 1.56897C0.875 1.94397 0.875 2.56897 1.28125 2.94397L4.40625 6.06897L1.28125 9.22522C0.875 9.60022 0.875 10.2252 1.28125 10.6002L1.96875 11.2877C2.34375 11.694 2.96875 11.694 3.34375 11.2877L6.5 8.16272L9.625 11.2877C10 11.694 10.625 11.694 11 11.2877L11.6875 10.6002C12.0938 10.2252 12.0938 9.60022 11.6875 9.22522L8.5625 6.06897Z" fill="#9196A7"/>
        </svg>
      </header>
      <section class="modal-body">
          <div class="search">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7812 13.8438L12.6562 10.7188C12.5 10.5938 12.3125 10.5 12.125 10.5H11.625C12.4688 9.40625 13 8.03125 13 6.5C13 2.9375 10.0625 0 6.5 0C2.90625 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.5 13C8 13 9.375 12.5 10.5 11.625V12.1562C10.5 12.3438 10.5625 12.5312 10.7188 12.6875L13.8125 15.7812C14.125 16.0938 14.5938 16.0938 14.875 15.7812L15.75 14.9062C16.0625 14.625 16.0625 14.1562 15.7812 13.8438ZM6.5 10.5C4.28125 10.5 2.5 8.71875 2.5 6.5C2.5 4.3125 4.28125 2.5 6.5 2.5C8.6875 2.5 10.5 4.3125 10.5 6.5C10.5 8.71875 8.6875 10.5 6.5 10.5Z" fill="#9196A7"/>
            </svg>
            <input type="text" v-model="search" placeholder="Find a participant"/>    
        </div>
          
          <div v-for="(participant,index) in filteredParticipants" :key="index" class="participant-container">
              <div class="participant-wrapper">
                  <img :src="participant.image" :alt="participant.name">
                  <div>
                    <h6>{{participant.name}}</h6>
                    <p>{{participant.course}}</p>
                  </div>
              </div>
              <div class="participant-icons">
                  <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 13.1131C8.36328 13.1131 9.875 11.6365 9.875 9.7381V4.1131C9.875 2.24982 8.36328 0.738098 6.5 0.738098C4.60156 0.738098 3.125 2.24982 3.125 4.1131V9.7381C3.125 11.6365 4.60156 13.1131 6.5 13.1131ZM12.125 7.4881H11.5625C11.2461 7.4881 11 7.76935 11 8.0506V9.7381C11 12.3748 8.71484 14.4842 6.04297 14.2381C3.6875 13.992 2 11.9178 2 9.56232V8.0506C2 7.76935 1.71875 7.4881 1.4375 7.4881H0.875C0.558594 7.4881 0.3125 7.76935 0.3125 8.0506V9.492C0.3125 12.6209 2.52734 15.4334 5.65625 15.8553V17.0506H3.6875C3.37109 17.0506 3.125 17.3318 3.125 17.6131V18.1756C3.125 18.492 3.37109 18.7381 3.6875 18.7381H9.3125C9.59375 18.7381 9.875 18.492 9.875 18.1756V17.6131C9.875 17.3318 9.59375 17.0506 9.3125 17.0506H7.34375V15.8904C10.332 15.4686 12.6875 12.867 12.6875 9.7381V8.0506C12.6875 7.76935 12.4062 7.4881 12.125 7.4881Z" fill="#9196A7"/>
                </svg>
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1875 0.988098H2.02734C1.11328 0.988098 0.375 1.76154 0.375 2.6756V12.8358C0.375 13.7498 1.11328 14.4881 2.02734 14.4881H12.1875C13.1016 14.4881 13.875 13.7498 13.875 12.8358V2.6756C13.875 1.76154 13.1016 0.988098 12.1875 0.988098ZM18.832 2.32404L15 4.99591V10.5154L18.832 13.1873C19.5703 13.6795 20.625 13.1522 20.625 12.2733V3.2381C20.625 2.35919 19.5703 1.83185 18.832 2.32404Z" fill="#9196A7"/>
                </svg>
              </div>
          </div>
       </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
    data() {
    return {
        search: "",
        participants: [
            {
                image: require("../assets/icons/participants/ashley.png"),
                name: "Ashley Gamboa",
                course: "4 BS HSc, Studying abroad"
            },
            {
                image: require("../assets/icons/participants/elaine.png"),
                name: "Elaine Peralta",
                course: "3 AB IS, Studying abroad"
            },
            {
                image: require("../assets/icons/participants/galvin.png"),
                name: "Galvin Ngo",
                course: "Ateneo Institute for the Science and Art of Learning and Teaching Assistant Director"
            },
            {
                image: require("../assets/icons/participants/pia.png"),
                name: "Pia Cabañero",
                course: "2 AB IS, Neurodivergent"
            },
            {
                image: require("../assets/icons/participants/analyn.png"),
                name: "Analyn Roquita M. Ripotola",
                course: "Registered Guidance Counselor of the Loyola Schools Office of Guidance and Counseling (LSOGC)"
            },
            {
                image: require("../assets/icons/participants/kristelle.png"),
                name: "Kristelle Ventura",
                course: "3 BS LM, Financial Aid Scholar"
            },
            {
                image: require("../assets/icons/participants/christine.png"),
                name: "Christine Escalona-Magboo",
                course: "Office of Admission and Aid Scholarship Officer"
            }
        ]
    }
    },
    computed: {
    filteredParticipants() {
      return this.participants.filter(participant => {
        return participant.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
  };
</script>

<style>
    .search {
        border: 1px solid #F4F4F4;
        background: #F4F4F4;
        border-radius: 8px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        margin: 0 0 24px 0;
    }

    .search svg{
        margin-right: 8px;
    }

    .search input {
        border:  none;
        width: 100%;
        outline: none;
        font-family: Nunito Sans, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
    }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(35, 35, 51, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    width: 540px;
    box-shadow: 0px 4px 10px rgba(20, 40, 80, 0.04);
    border-radius: 8px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }


  .modal-header {
    padding: 30px 24px;
    position: relative;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #232333;
    justify-content: space-between;
    
  }

  .modal-header svg {
      float: right;
      cursor: pointer;
  }

  .modal-body {
    position: relative;
    padding: 30px 24px;
  }

  .participant-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
  }

  .participant-wrapper {
      flex-grow: 1;
      display: flex;
      align-items: center;
  }

   .participant-wrapper img {
      margin-right: 12px;
      width: 32px;
      height: 32px;
  }

  .participant-wrapper h6 {
        font-family: Nunito Sans, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        margin: 0;
        color: #232333;
  }

  .participant-wrapper p {
        font-family: Nunito Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        margin: 0;
        max-width: 320px;
        color: #9196A7; 
  }

  .participant-icons {
      display: flex;
      align-items: center;
  }

  .participant-icons svg {
      margin-left: 12px;
  }
</style>