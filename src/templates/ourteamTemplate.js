import React from "react"

const OurTeamTemplate = ({
  teamTitle1,
  teamTitle2,
  teamSubTitle,
  teamMembers,
}) => {
  return (
 
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8  ">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {teamTitle1} <span class="text-sunset-600">{teamTitle2}</span>
          </h2>
          <div class="space-y-12 shadow-lg border-2 border-gray-100 mt-4 p-4">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <p class="text-xl text-gray-500">{teamSubTitle}</p>
            </div>
            <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              {teamMembers.map(node => (
                <li key={node.toString()}>
                  <div class="space-y-6">
                    <img
                      width="300px"
                      height="300px"
                      class="mx-auto h-40 w-40 rounded-full bject-cover"
                      src={
                        node.node.frontmatter.photo +
                        "?nf_resize=smartcrop&w=300&h=300"
                      }
                      alt=""
                    ></img>
                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>{node.node.frontmatter.name}</h3>
                        <p class="text-sunset-500 font-inter_bold">
                          {node.node.frontmatter.job}
                        </p>
                      </div>
                      <ul class="flex justify-center space-x-5">
                        {node.node.frontmatter.twitter && (
                           <li class="h-5 w-5">
                            <a
                              href={node.node.frontmatter.twitter}
                              target="_blank"
                              rel="noreferrer"
                              class="text-gray-400 hover:text-gray-500 cursor-pointer"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                height="100%"
                                fill="currentColor"
                                version="1.1"
                                viewBox="0 0 512 512"
                     
                              >
                                <path
                                  d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
                                
                                />
                              </svg>
                            </a>
                          </li>
                        )}
                        {node.node.frontmatter.linkedin && (
                          <li class="h-5 w-5">
                            <a
                              href={node.node.frontmatter.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              class="text-gray-400 hover:text-gray-500"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        )}

                        {node.node.frontmatter.facebook && (
                          <li class="h-5 w-5">
                            <a
                              href={node.node.frontmatter.facebook}
                              target="_blank"
                              rel="noreferrer"
                              class="text-gray-400 hover:text-gray-500"
                            >
                              <span class="sr-only">Facebook</span>
                              <svg
                                class="text-xl"
                                fill="currentColor"
                                aria-hidden="true"
                                viewBox="0 0 461 461"
                              >
                                <path d="M374.245,285.825l14.104,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.117,0l0,-78.291c0,0 -36.408,-6.214 -71.214,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.542 32.798,3.865 49.709,3.865c16.911,0 33.512,-1.323 49.708,-3.865l0,-222.31l74.129,0Z" />
                              </svg>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
                
              ))}
            </ul>
          </div>
        </div>
   
  )
}
export default OurTeamTemplate
