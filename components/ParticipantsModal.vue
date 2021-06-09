<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="modal-title">
          Participants (7)
          <v-icon small @click="dialog = false" class="close-button">
            mdi-close-thick
          </v-icon>
        </v-card-title>

        <v-card-text>
          <div class="find-wrapper">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7812 13.8438L12.6562 10.7188C12.5 10.5938 12.3125 10.5 12.125 10.5H11.625C12.4688 9.40625 13 8.03125 13 6.5C13 2.9375 10.0625 0 6.5 0C2.90625 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.5 13C8 13 9.375 12.5 10.5 11.625V12.1562C10.5 12.3438 10.5625 12.5312 10.7188 12.6875L13.8125 15.7812C14.125 16.0938 14.5938 16.0938 14.875 15.7812L15.75 14.9062C16.0625 14.625 16.0625 14.1562 15.7812 13.8438ZM6.5 10.5C4.28125 10.5 2.5 8.71875 2.5 6.5C2.5 4.3125 4.28125 2.5 6.5 2.5C8.6875 2.5 10.5 4.3125 10.5 6.5C10.5 8.71875 8.6875 10.5 6.5 10.5Z"
                fill="#9196A7"
              />
            </svg>
            <input
              type="text"
              class="find-participant"
              placeholder="Find a participant"
              disabled
            />
          </div>
          <div
            class="person-row"
            v-for="person in participants"
            :key="person.name"
          >
            <div class="person-initials">{{ person.initials }}</div>
            <div class="person-details">
              <span class="person-name">{{ person.name }}</span>
              <span class="person-desc">{{ person.desc }}</span>
            </div>
            <img
              class="icons"
              :src="require('../assets/images/modal/icons.svg')"
              alt=""
            />
          </div>
          <div class="card-bottom"></div>
        </v-card-text>

        <!-- <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    cssVars() {
      return {
        "--color": this.color,
      };
    },
  },
  data() {
    return {
      dialog: false,
      participants: [
        {
          name: "Ashley Gamboa",
          initials: "AG",
          desc: "4 BS HSc, Studying abroad",
        },
        {
          name: "Elaine Peralta",
          initials: "EP",
          desc: "3 AB IS, Studying abroad",
        },
        {
          name: "Galvin Ngo",
          initials: "GN",
          desc: "Ateneo Institute for the Science and Art of Learning and Teaching Assistant Director",
        },
        {
          name: "Pia Cabañero",
          initials: "PG",
          desc: "2 AB IS, Neurodivergent",
        },
        {
          name: "Analyn Roquita M. Ripolota",
          initials: "AR",
          desc: "Registered Guidance Counselor of the Loyola Schools Office of Guidance and Counseling (LSOGC)",
        },
        {
          name: "Kristelle Ventura",
          initials: "KV",
          desc: "3 BS LM, Financial Aid Scholar",
        },
        {
          name: "Christine Escalona-Magboo",
          initials: "CM",
          desc: "Office of Admission and Aid Scholarship Officer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-title {
  color: #232333;
  font-family: $subheading-font;
  font-weight: bold !important;
  text-align: center;
  display: flex;
  justify-content: center;

  .close-button {
    position: absolute;
    right: 23px;
    // margin-left: 50px;
  }
}

.find-wrapper {
  position: relative;

  svg {
    position: absolute;
    top: 11px;
    left: 14px;
  }

  .find-participant {
    // position: absolute;
    background: #f4f4f4;
    padding: 8px;
    padding-left: 40px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1.3em;

    &:placeholder {
      color: #9196a7;
    }
  }
}

.person-row {
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  .person-initials {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    line-height: 50%;
    align-items: center;
    font-family: $body-font;
    color: #f4f4f4;
    border-radius: 50%;
    background-color: #f26d21;
    font-size: 0.9em;
  }

  .person-details {
    margin-left: 0.8em;
    width: 70%;
    font-size: 1.1em;
    display: flex;
    flex-direction: column;

    .person-name {
      color: #232333;
      font-size: 1em;
    }

    .person-desc {
      color: #9196a7;
      font-weight: 600;
      font-size: 0.8em;
      margin-top: -1px;
      line-height: 16px;
    }
  }

  .icons {
    margin-left: auto;
  }
}

.card-bottom {
  margin-bottom: 3em;
}
</style>