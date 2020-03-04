export const getNewValidForm = () =>
  Object.assign(
    {},
    {
      id: "cjplbvecc000d0766j32r19am",
      status: "DRAFT",
      emitter: {
        type: "PRODUCER",
        workSite: {
          name: "",
          address: "",
          city: "",
          postalCode: "",
          infos: ""
        },
        company: {
          name: "A company 2",
          siret: "XXX XXX XXX 0002",
          address: "8 rue du Général de Gaulle",
          contact: "Emetteur",
          phone: "01",
          mail: "e@e.fr"
        }
      },
      recipient: {
        cap: "1234",
        processingOperation: "D 6",
        company: {
          name: "A company 3",
          siret: "XXX XXX XXX 0003",
          address: "8 rue du Général de Gaulle",
          contact: "Destination",
          phone: "02",
          mail: "d@d.fr"
        }
      },
      transporter: {
        receipt: "sdfg",
        department: "82",
        validityLimit: "2018-12-11T00:00:00.000Z",
        numberPlate: "12345",
        company: {
          name: "A company 4",
          siret: "XXX XXX XXX 0004",
          address: "8 rue du Général de Gaulle",
          contact: "Transporteur",
          phone: "03",
          mail: "t@t.fr"
        }
      },
      wasteDetails: {
        code: "01 03 04*",
        onuCode: "AAA",
        packagings: ["CITERNE", "GRV"],
        otherPackaging: "",
        numberOfPackages: 2,
        quantity: 1.5,
        quantityType: "REAL"
      }
    }
  );

export const EMPTY_FORM = {
  emitter: {
    type: "PRODUCER",
    workSite: {
      name: "",
      address: "",
      city: "",
      postalCode: "",
      infos: ""
    },
    company: {
      siret: "",
      name: "",
      address: "",
      contact: "Contact",
      mail: "",
      phone: ""
    }
  },
  recipient: {
    cap: "",
    processingOperation: "",
    company: {
      siret: "",
      name: "",
      address: "",
      contact: "",
      mail: "",
      phone: ""
    }
  },
  transporter: {
    isExemptedOfReceipt: false,
    receipt: "",
    department: "",
    validityLimit: null,
    numberPlate: "",
    company: {
      siret: "",
      name: "",
      address: "",
      contact: "",
      mail: "",
      phone: ""
    }
  },
  trader: {
    receipt: "",
    department: "",
    validityLimit: null,
    company: {
      siret: "",
      name: "",
      address: "",
      contact: "",
      mail: "",
      phone: ""
    }
  },
  wasteDetails: {
    code: "",
    name: "",
    onuCode: "",
    packagings: [],
    otherPackaging: "",
    numberOfPackages: null,
    quantity: null,
    quantityType: "ESTIMATED",
    consistence: "SOLID"
  },
  appendix2Forms: [],
  ecoOrganisme: {}
};
