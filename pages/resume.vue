<template>
  <v-card>
    <v-tabs v-model="tab" background-color="deep-purple accent-4" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        تخصص ها
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        پروژه ها
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        در حال یادگیری
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-card-text>
            <template>
              <!-- زبان های برنامه نویسی -->
              <h5 class="pb-1 teal--text">زبانهای برنامه نویسی</h5>
              <hr class="pink darken-1" />
              <v-row justify="center">
                <v-col
                  v-for="item in programingLanguages"
                  :key="item.id"
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  align="center"
                >
                  <template>
                    <v-card color="white pt-5">
                      <v-card-actions>
                        <v-badge
                          :value="hover"
                          color="deep-purple accent-4"
                          content="پروژه 12"
                          left
                          transition="slide-x-transition"
                          class="mx-auto"
                        >
                          <v-icon color="indigo" size="70">{{item.icon}}</v-icon>
                        </v-badge>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های برنامه نویسی -->
              <h5 class="pb-1 teal--text">تکنولوژی های عمومی برنامه نویسی</h5>
              <hr class="pink" />
              <v-row justify="center">
                <!-- dialog for practiceProject -->
                <template v-if="dialog">
                  <dialogResume
                    imageHeader="data:image/jpeg;base64,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"
                    titleHeader="پروژه های انجام شده با html5"
                    :identity="identity"
                  ></dialogResume>
                </template>
                <!-- end dialog for practiceProject -->
                <v-col v-for="item in publicTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-text class="m-0 pa-0 w-100 purple">
                        <v-list shaped class="pa-0 w-100">
                          <v-subheader>پروژه های انجام شده</v-subheader>
                          <v-list-item-group v-model="item.text" class>
                            <v-list-item
                              color="info"
                              class="pa-0"
                              @click.prevent="showPracticeProjecctDialog(item.identity)"
                            >
                              <v-list-item-icon class="ml-1">
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های تمرینی</v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-icon class="pa-0">
                                <v-badge
                                  color="deep-purple accent-4"
                                  content="99+"
                                  inline
                                  transition="slide-x-transition"
                                  top
                                ></v-badge>
                              </v-list-item-icon>
                            </v-list-item>
                            <!-- second list item in here -->
                            <v-list-item
                              color="info"
                              class="pa-0"
                              @click.prevent="showRealProjectDialog"
                            >
                              <v-list-item-icon class="ml-1">
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های واقعی</v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-icon class="pa-0">
                                <v-badge
                                  color="deep-purple accent-4"
                                  content="99+"
                                  inline
                                  transition="slide-x-transition"
                                  top
                                ></v-badge>
                              </v-list-item-icon>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show" class="p-absolute">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان جاوا اسکریپت -->
              <h5 class="pb-1 teal--text">تکنولوژی های زبان برنامه نویسی جاوااسکریپت</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col
                  v-for="item in javascriptTechnology"
                  :key="item.id"
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان  سی اس اس -->
              <h5 class="pb-1 teal--text">تکنولوژی های مربوط به سی اس اس</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in cssTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>
                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>
                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان  پی اچ پی -->
              <h5 class="pb-1 teal--text">تکنولوژی های مربوط به زبان برنامه نویسی پی اچ پی</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in phpTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
              <!-- دیتابیس ها -->
              <h5 class="pb-1 teal--text">پایگاه داده ها</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in databases" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>
                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card flat>
          <v-card-text>
            <template>
              <!-- زبان های برنامه نویسی -->
              <h5 class="pb-1 teal--text">نوع پروژه های انجام</h5>
              <hr class="pink darken-1" />
              <v-row justify="center">
                <v-col
                  v-for="item in projectTypeCount"
                  :key="item.id"
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  align="center"
                >
                  <template>
                    <v-card color="white pt-5">
                      <v-card-actions>
                        <v-badge
                          :value="hover"
                          color="deep-purple accent-4"
                          content="پروژه 12"
                          left
                          transition="slide-x-transition"
                          class="mx-auto"
                        >
                          <v-icon color="indigo" size="70">{{item.icon}}</v-icon>
                        </v-badge>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های برنامه نویسی -->
              <h5 class="pb-1 teal--text">تکنولوژی های عمومی برنامه نویسی</h5>
              <hr class="pink" />
              <v-row justify="center">
                <!-- dialog for practiceProject -->
                <template v-if="dialog">
                  <dialogResume
                    imageHeader="data:image/jpeg;base64,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"
                    titleHeader="پروژه های انجام شده با html5"
                    :identity="identity"
                  ></dialogResume>
                </template>
                <!-- end dialog for practiceProject -->
                <v-col v-for="item in publicTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-text class="m-0 pa-0 w-100 purple">
                        <v-list shaped class="pa-0 w-100">
                          <v-subheader>پروژه های انجام شده</v-subheader>
                          <v-list-item-group v-model="item.text" class>
                            <v-list-item
                              color="info"
                              class="pa-0"
                              @click.prevent="showPracticeProjecctDialog(item.identity)"
                            >
                              <v-list-item-icon class="ml-1">
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های تمرینی</v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-icon class="pa-0">
                                <v-badge
                                  color="deep-purple accent-4"
                                  content="99+"
                                  inline
                                  transition="slide-x-transition"
                                  top
                                ></v-badge>
                              </v-list-item-icon>
                            </v-list-item>
                            <!-- second list item in here -->
                            <v-list-item
                              color="info"
                              class="pa-0"
                              @click.prevent="showRealProjectDialog"
                            >
                              <v-list-item-icon class="ml-1">
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های واقعی</v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-icon class="pa-0">
                                <v-badge
                                  color="deep-purple accent-4"
                                  content="99+"
                                  inline
                                  transition="slide-x-transition"
                                  top
                                ></v-badge>
                              </v-list-item-icon>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show" class="p-absolute">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان جاوا اسکریپت -->
              <h5 class="pb-1 teal--text">تکنولوژی های زبان برنامه نویسی جاوااسکریپت</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col
                  v-for="item in javascriptTechnology"
                  :key="item.id"
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان  سی اس اس -->
              <h5 class="pb-1 teal--text">تکنولوژی های مربوط به سی اس اس</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in cssTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>
                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>
                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>

              <!-- تکنولوژی های زبان  پی اچ پی -->
              <h5 class="pb-1 teal--text">تکنولوژی های مربوط به زبان برنامه نویسی پی اچ پی</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in phpTechnology" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>

                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
              <!-- دیتابیس ها -->
              <h5 class="pb-1 teal--text">پایگاه داده ها</h5>
              <hr class="pink" />
              <v-row justify="center">
                <v-col v-for="item in databases" :key="item.id" lg="3" md="4" sm="6" xs="12">
                  <template>
                    <v-card class="mx-auto" max-width="344">
                      <v-img :src="item.image" class="img-fluid"></v-img>

                      <v-card-title class="h4">پروژه های انجام شده</v-card-title>

                      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                      <v-card-text>
                        <v-list shaped>
                          <v-subheader>REPORTS</v-subheader>
                          <v-list-item-group v-model="item.text" color="primary">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-webpack</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>پروژه های انجام شده</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>
                          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <!-- show snackbar error or success-->
    <v-snackbar v-model="snackbarShow" :timeout="5000" color="pink darken-3">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="amber darken-1" text v-bind="attrs" @click="closeSnackbar">Close</v-btn>
      </template>
    </v-snackbar>
    <!-- end show snackbar error or success -->
  </v-card>
</template>
<script>
import dialogResume from '~/components/dialogResume'
export default {
  components: {
    dialogResume
  },
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
      tab: null,
      hover: true,
      
      projectTypeCount: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: 'mdi-language-php',
          image:
            'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: 'mdi-language-javascript',
          image:
            'data:image/png;base64,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'
        }
      ],
      
      programingLanguages: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: 'mdi-language-php',
          image:
            'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: 'mdi-language-javascript',
          image:
            'data:image/png;base64,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'
        }
      ],
      publicTechnology: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          identity: 'html',
          image:
            'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          identity: 'css',
          image:
            'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          identity: 'javascript',
          image:
            'data:image/png;base64,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'
        }
      ],
      javascriptTechnology: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrOZOPLoUXxynDqVDUSo7RaRg3_i0HfDujQ&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUU3tOV5Gw48vlv7unZpyOhDihThjoDZZ9ug&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxFBOuPrMGqrs5Injqg1dIJWvo05wiJt937w&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZwktu3WgN2bZQfUuOHg2AMTUx9x3dqlQetw&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        }
      ],
      cssTechnology: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi1Gt2r3DdHatUIhTwN-QR_iIsNCfI9q51CwZU8u04gD8OHI&s'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/png;base64,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'
        }
      ],
      phpTechnology: [
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6vlvTxLKh6AGMkpSWEo7wPDnx1-sC5BEP2w&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDKnbb4Lw8J78fXvm8PtWd9nbsESPrLR2dIg&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/png;base64,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'
        }
      ],
      databases: [
        {
          id: Math.random().toString() + Math.random().toString() + 1,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: '',
          icon: '',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYXuTeBRknbjymu8Ema2IC8zkLtpt3SM8pvA&usqp=CAU'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 3,
          show: false,
          text: '',
          icon: '',
          image:
            'data:image/jpeg;base64,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'
        }
      ],
      identity: 'undefined'
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.resume.practiceDialog
      },
      set(value) {
        this.$store.commit('resume/togglePracticeDialog')
      }
    },
    snackbarShow: {
      get() {
        return this.$store.state.resume.showStatusSnackbar
      },
      set(value) {
        this.$store.commit('resume/toggleShowSnackbar')
      }
    },
    snackbarText() {
      console.log(
        'hi from snackabrtext',
        this.$store.state.resume.snackbarTextStatus
      )
      return this.$store.state.resume.snackbarTextStatus
    }
  },
  methods: {
    showPracticeProjecctDialog(identity = 'undefined') {
      if (identity.length) {
        this.identity = identity
      }
      this.$store.commit('resume/togglePracticeDialog')
    },

    showRealProjectDialog() {
      this.$store.commit('resume/toggleRealDialog')
    },
    closeSnackbar() {
      //toggle show snackbar
      this.$store.commit('resume/toggleShowSnackbar')
    }
  }
}
</script>

<style scoped>
#h3 {
  font-size: 1.2em;
}
.img-fluid {
  width: 100% !important;
}
.w-100 {
  width: 100%;
}
.p-absolute {
  position: absolute !important;
  background-color: rgb(24, 32, 34);
  z-index: 1;
}
</style>
