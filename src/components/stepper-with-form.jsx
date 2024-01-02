"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { stepNo: 1, title: "Personal Information" },
  { stepNo: 2, title: "Contact Information" },
  { stepNo: 3, title: "Additional Details" },
  { stepNo: 4, title: "Review and Submit" },
];

export default function StepperWithForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    dateOfBirth: "",
    countryOfBirth: "",
    gender: "",
    occupation: "",
    agreeTermsAndConditions: "",
  });

  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-md rounded-lg border border-gray-400 bg-white shadow-xl",
        "dark:border-gray-600 dark:bg-gray-800",
      )}
    >
      <ul className={clsx("flex justify-between rounded p-8")}>
        {[1, 2, 3, 4].map((step) => (
          <motion.li
            key={step}
            animate={
              currentStep === step
                ? "active"
                : currentStep < step
                  ? "inactive"
                  : "complete"
            }
            className="relative"
          >
            <motion.div
              variants={{
                active: {
                  scale: 1,
                  transition: {
                    delay: 0,
                    duration: 0.2,
                  },
                },
                complete: {
                  scale: 1.25,
                },
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "tween",
                ease: "circOut",
              }}
              className={clsx(
                "absolute inset-0 rounded-full bg-blue-400",
                "dark:bg-blue-600",
              )}
            />
            <motion.div
              initial={false}
              variants={{
                inactive: {
                  backgroundColor: "#fafafa", // neutral-50
                  borderColor: "#a3a3a3", // neutral-400
                  color: "#a3a3a3", // neutral-400
                },
                active: {
                  backgroundColor: "#fff", // white
                  borderColor: "#3b82f6", // blue-500
                  color: "#3b82f6", // blue-500
                },
                complete: {
                  backgroundColor: "#3b82f6", // blue-500
                  borderColor: "#3b82f6", // blue-500
                  color: "#3b82f6", // blue-500
                },
              }}
              transition={{ duration: 0.2 }}
              className={clsx(
                "relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold",
              )}
            >
              <div className={clsx("flex items-center justify-center")}>
                {currentStep > step ? (
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    className={clsx("h-6 w-6 text-white")}
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span>{step}</span>
                )}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* Dynamic form controls based on `currentStep` */}
      <form className={clsx("space-y-2 px-8 text-gray-900", "dark:text-white")}>
        {currentStep === data[0].stepNo && (
          <motion.div
            key={data[0].stepNo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className={clsx("space-y-3")}
          >
            <h2 className={clsx("mb-5 text-xl font-medium")}>
              {data[0].title}
            </h2>
            <div>
              <label
                htmlFor="firstName"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                required
                placeholder="e.g., Otega"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                required
                placeholder="e.g., Fejiro"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="e.g., otegafejiro@company.com"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
          </motion.div>
        )}

        {currentStep === data[1].stepNo && (
          <motion.div
            key={data[1].stepNo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1 } }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className={clsx("space-y-3")}
          >
            <h2 className={clsx("mb-5 text-xl font-medium")}>
              {data[1].title}
            </h2>
            <div>
              <label
                htmlFor="phoneNumber"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                required
                placeholder="e.g., +2347045678901"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                placeholder="e.g., 25 Abeo Street, Surulere"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                City
              </label>
              <input
                type="text"
                id="city"
                required
                placeholder="e.g., Lagos"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                required
                placeholder="e.g., Nigeria"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
          </motion.div>
        )}

        {currentStep === data[2].stepNo && (
          <motion.div
            key={data[2].stepNo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className={clsx("space-y-3")}
          >
            <h2 className={clsx("mb-5 text-xl font-medium")}>
              {data[2].title}
            </h2>
            <div>
              <label
                htmlFor="dateOfBirth"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Date of birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="countryOfBirth"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Country of birth
              </label>
              <input
                type="text"
                id="placeOfBirth"
                required
                placeholder="e.g., Nigeria"
                value={formData.countryOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, countryOfBirth: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Gender
              </label>
              <select
                id="gender"
                required
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              >
                <option value="">--Please select your gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="occupation"
                className={clsx(
                  "mb-2 block text-sm font-medium text-gray-900",
                  "dark:text-white",
                )}
              >
                Occupation
              </label>
              <select
                id="occupation"
                required
                value={formData.occupation}
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
                className={clsx(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm",
                  "focus:border-blue-500 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-blue-500 dark:focus:ring-blue-500",
                )}
              >
                <option value="">--Please select your occupation--</option>
                <option value="Accountant">Accountant</option>
                <option value="Actor/Actress">Actor/Actress</option>
                <option value="Architect">Architect</option>
                <option value="Artist">Artist</option>
                <option value="Baker">Baker</option>
                <option value="Barista">Barista</option>
                <option value="Biologist">Biologist</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Chef">Chef</option>
                <option value="Civil Engineer">Civil Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Dentist">Dentist</option>
                <option value="Doctor">Doctor</option>
                <option value="Electrician">Electrician</option>
                <option value="Fashion Designer">Event Planner</option>
                <option value="Fashion Designer">Fashion Designer</option>
                <option value="Financial Analyst">Financial Analyst</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Journalist">Hairstylist</option>
                <option value="Journalist">Journalist</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Librarian">Librarian</option>
                <option value="Marketing Manager">Marketing Manager</option>
                <option value="Nurse">Nurse</option>
                <option value="Paramedic">Paramedic</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Photographer">Photographer</option>
                <option value="Pilot">Pilot</option>
                <option value="Police Officer">Police Officer</option>
                <option value="Professor">Professor</option>
                <option value="Programmer">Programmer</option>
                <option value="Psychologist">Psychologist</option>
                <option value="Real Estate Agent">Real Estate Agent</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Research Scientist">Research Scientist</option>
                <option value="Sales Representative">
                  Sales Representative
                </option>
                <option value="Social Worker">Social Worker</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Translator">Translator</option>
                <option value="Veterinarian">Veterinarian</option>
                <option value="Waiter/Waitress">Waiter/Waitress</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Writer">Writer</option>
                <option value="Zoologist">Zoologist</option>
              </select>
            </div>
          </motion.div>
        )}

        {currentStep === data[3].stepNo && (
          <motion.div
            key={data[3].stepNo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className={clsx("space-y-5")}
          >
            <h2 className={clsx("mb-5 text-xl font-medium")}>
              {data[3].title}
            </h2>
            <div className={clsx("space-y-1")}>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>First name:</span>
                <span>{formData.firstName}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Last name:</span>
                <span>{formData.lastName}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Email address:</span>
                <span>{formData.emailAddress}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Password:</span>
                <span>{formData.password}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Phone number:</span>
                <span>{formData.phoneNumber}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Address:</span>
                <span>
                  {formData.address} {formData.city} {formData.country}
                </span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Date of birth:</span>
                <span>{formData.dateOfBirth}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Country of birth:</span>
                <span>{formData.countryOfBirth}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Gender:</span>
                <span>{formData.gender}</span>
              </p>
              <p className={clsx("flex items-center gap-2 text-sm")}>
                <span>Occupation:</span>
                <span>{formData.occupation}</span>
              </p>
            </div>
            <div className={clsx("flex items-center")}>
              <input
                id="termsAndConditions"
                type="checkbox"
                value={formData.agreeTermsAndConditions}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    agreeTermsAndConditions: e.target.value,
                  })
                }
                className={clsx(
                  "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600",
                  "focus:ring-2 focus:ring-blue-500",
                  "dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800",
                )}
              />
              <label
                htmlFor="termsAndConditions"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className={clsx(
                    "text-blue-600",
                    "hover:underline",
                    "dark:text-blue-500",
                  )}
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              onClick={() => setCurrentStep(currentStep + 1)}
              className={clsx(
                "w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white",
                "sm:w-auto",
                "hover:bg-blue-800",
                "focus:outline-none focus:ring-4 focus:ring-blue-300",
                "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              )}
            >
              Submit
            </button>
          </motion.div>
        )}
      </form>

      {/* Back and Continue buttons based on `currentStep` */}
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button
            onClick={() =>
              setCurrentStep(currentStep < 2 ? currentStep : currentStep - 1)
            }
            className={clsx(
              "duration-350 rounded px-2 py-1 text-neutral-500 transition",
              "hover:text-neutral-700",
              { hidden: currentStep === 1 },
            )}
          >
            Back
          </button>
          <button
            onClick={() =>
              setCurrentStep(currentStep > 4 ? currentStep : currentStep + 1)
            }
            className={clsx(
              "duration-350 ml-auto rounded-full bg-blue-500 px-3.5 py-1.5 font-medium tracking-tight text-white transition",
              "hover:bg-blue-600",
              "active:bg-blue-700",
              { hidden: currentStep > 3 },
            )}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
