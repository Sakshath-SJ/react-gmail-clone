(this["webpackJsonpgmail-clone-yt"] =
  this["webpackJsonpgmail-clone-yt"] || []).push([
  [0],
  {
    111: function (e, s, t) {},
    115: function (e, s, t) {},
    124: function (e, s, t) {},
    125: function (e, s, t) {},
    126: function (e, s, t) {},
    127: function (e, s, t) {},
    128: function (e, s, t) {
      "use strict";
      t.r(s);
      var c = t(2),
        a = t(29),
        n = t.n(a),
        i = (t(111), t(16)),
        j = t(39),
        l = (t(115), t(65)),
        r = t.n(l),
        d = t(70),
        b = t.n(d),
        o = t(71),
        O = t.n(o),
        m = t(36),
        x = t.n(m),
        h = t(72),
        u = t.n(h),
        p = t(73),
        v = t.n(p),
        _ = t(74),
        f = t.n(_),
        g = t(75),
        N = t.n(g),
        y = t(76),
        I = t.n(y),
        S = t(77),
        M = t.n(S),
        L = t(78),
        w = t.n(L),
        C = t(79),
        k = t.n(C),
        R = t(34),
        E = t.n(R),
        A = t(50),
        P = t.n(A),
        z = t(37),
        D = Object(z.b)({
          name: "mail",
          initialState: { sendMessageIsOpen: !1, selectedMessage: null },
          reducers: {
            openSendMessage: function (e) {
              e.sendMessageIsOpen = !0;
            },
            closeSendMessage: function (e) {
              e.sendMessageIsOpen = !1;
            },
            openMessage: function (e, s) {
              e.selectedMessage = s.payload;
            },
          },
        }),
        T = D.actions,
        U = T.openSendMessage,
        q = T.closeSendMessage,
        B = T.openMessage,
        F = function (e) {
          return e.mail.sendMessageIsOpen;
        },
        J = function (e) {
          return e.mail.selectedMessage;
        },
        W = D.reducer,
        Y = t(30),
        G = Y.a
          .initializeApp({
            apiKey: "AIzaSyCWLITpHhpbPlIHAezysFEECkbl1PEE2dY",
            authDomain: "clone-with-reactjs-db854.firebaseapp.com",
            projectId: "clone-with-reactjs-db854",
            storageBucket: "clone-with-reactjs-db854.appspot.com",
            messagingSenderId: "290402162052",
            appId: "1:290402162052:web:ee6dc6c43b1a59027079d1",
          })
          .firestore(),
        H = Y.a.auth(),
        V = new Y.a.auth.GoogleAuthProvider(),
        K = Object(z.b)({
          name: "user",
          initialState: { value: null },
          reducers: {
            signin: function (e, s) {
              e.value = s.payload;
            },
            signout: function (e) {
              e.value = null;
            },
          },
        }),
        Z = K.actions,
        Q = Z.signin,
        X = Z.signout,
        $ = function (e) {
          return e.user.value;
        },
        ee = K.reducer,
        se = t(3);
      var te = function () {
          var e = Object(c.useState)(""),
            s = Object(j.a)(e, 2),
            t = s[0],
            a = s[1],
            n = Object(c.useState)(""),
            l = Object(j.a)(n, 2),
            d = l[0],
            o = l[1],
            m = Object(c.useState)(""),
            h = Object(j.a)(m, 2),
            p = h[0],
            _ = h[1],
            g = Object(i.b)(),
            y = Object(i.c)($);
          return Object(se.jsxs)("div", {
            className: "compose",
            children: [
              Object(se.jsxs)("div", {
                className: "compose__header",
                children: [
                  Object(se.jsx)("div", {
                    className: "compose__header__left",
                    children: Object(se.jsx)("span", {
                      children: "New Message",
                    }),
                  }),
                  Object(se.jsxs)("div", {
                    className: "compose__header__right",
                    children: [
                      Object(se.jsx)(r.a, {}),
                      Object(se.jsx)(b.a, {}),
                      Object(se.jsx)(O.a, {
                        onClick: function () {
                          return g(q());
                        },
                      }),
                    ],
                  }),
                ],
              }),
              Object(se.jsxs)("form", {
                onSubmit: function (e) {
                  return (
                    e.preventDefault(),
                    "" === t
                      ? alert("To is required")
                      : "" === d
                      ? alert("Subject is required")
                      : "" === p
                      ? alert("Message is required")
                      : (G.collection("emails").add({
                          to: t,
                          subject: d,
                          message: p,
                          from: y.email,
                          fromName: y.displayName,
                          timestamp: Y.a.firestore.FieldValue.serverTimestamp(),
                        }),
                        a(""),
                        o(""),
                        _(""),
                        alert("Email sent successfully"),
                        void g(q()))
                  );
                },
                children: [
                  Object(se.jsx)("div", {
                    className: "compose__body",
                    children: Object(se.jsxs)("div", {
                      className: "compose__bodyForm",
                      children: [
                        Object(se.jsx)("input", {
                          type: "email",
                          name: "email",
                          placeholder: "recipients",
                          value: t,
                          onChange: function (e) {
                            return a(e.target.value);
                          },
                        }),
                        Object(se.jsx)("input", {
                          type: "text",
                          name: "subject",
                          placeholder: "Subject",
                          value: d,
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                        }),
                        Object(se.jsx)("textarea", {
                          rows: "20",
                          name: "message",
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                          children: p,
                        }),
                      ],
                    }),
                  }),
                  Object(se.jsxs)("div", {
                    className: "compose__footer",
                    children: [
                      Object(se.jsx)("div", {
                        className: "compose__footerLeft",
                        children: Object(se.jsxs)("button", {
                          type: "submit",
                          children: ["Send ", Object(se.jsx)(x.a, {})],
                        }),
                      }),
                      Object(se.jsxs)("div", {
                        className: "compose__footerRight",
                        children: [
                          Object(se.jsx)(u.a, {}),
                          Object(se.jsx)(v.a, {}),
                          Object(se.jsx)(f.a, {}),
                          Object(se.jsx)(N.a, {}),
                          Object(se.jsx)(I.a, {}),
                          Object(se.jsx)(M.a, {}),
                          Object(se.jsx)(w.a, {}),
                          Object(se.jsx)(k.a, {}),
                          Object(se.jsx)(E.a, {}),
                          Object(se.jsx)(P.a, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ce = (t(40), t(142)),
        ae = t(144),
        ne = t(80),
        ie = t.n(ne),
        je = t(51),
        le = t.n(je),
        re = t(52),
        de = t.n(re),
        be = t(53),
        oe = t.n(be),
        Oe = t(54),
        me = t.n(Oe),
        xe = t(81),
        he = t.n(xe),
        ue = t(82),
        pe = t.n(ue),
        ve = t(83),
        _e = t.n(ve),
        fe = t(84),
        ge = t.n(fe),
        Ne = t(14);
      var ye = function () {
          var e = Object(i.c)(J);
          console.log(e);
          var s = Object(Ne.f)();
          return Object(se.jsxs)("div", {
            className: "emaildetails",
            children: [
              Object(se.jsxs)("div", {
                className: "emailist__settings",
                children: [
                  Object(se.jsxs)("div", {
                    className: "emailist__settingsLeft",
                    children: [
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(ie.a, {
                          onClick: function () {
                            return s.push("/");
                          },
                        }),
                      }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(x.a, {}),
                      }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(le.a, {}),
                      }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(E.a, {}),
                      }),
                    ],
                  }),
                  Object(se.jsxs)("div", {
                    className: "emailist__settingsRight",
                    children: [
                      Object(se.jsx)("p", { children: "1-50 of 10,222" }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(de.a, {}),
                      }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(oe.a, {}),
                      }),
                    ],
                  }),
                ],
              }),
              Object(se.jsxs)("div", {
                className: "emaildetails_message",
                children: [
                  Object(se.jsxs)("div", {
                    className: "emaildetails__header",
                    children: [
                      Object(se.jsxs)("div", {
                        className: "emaildetails__headerLeft",
                        children: [
                          Object(se.jsx)("h4", { children: e.subject }),
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(me.a, {}),
                          }),
                        ],
                      }),
                      Object(se.jsxs)("div", {
                        className: "emaildetails__headerRight",
                        children: [
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(he.a, {}),
                          }),
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(pe.a, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(se.jsxs)("div", {
                    className: "emaildetails__middleheader",
                    children: [
                      Object(se.jsxs)("div", {
                        className: "emaildetails__middleheaderLeft",
                        children: [
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(ae.a, {}),
                          }),
                          Object(se.jsx)("h4", { children: e.name }),
                          Object(se.jsx)("p", { children: e.email }),
                        ],
                      }),
                      Object(se.jsxs)("div", {
                        className: "emaildetails__middleheaderRight",
                        children: [
                          Object(se.jsx)("p", { children: e.time }),
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(_e.a, {}),
                          }),
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(ge.a, {}),
                          }),
                          Object(se.jsx)(ce.a, {
                            children: Object(se.jsx)(E.a, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(se.jsx)("div", {
                    className: "emaildetails_body",
                    children: Object(se.jsx)("p", { children: e.message }),
                  }),
                ],
              }),
            ],
          });
        },
        Ie = t(55),
        Se = t.n(Ie),
        Me = t(85),
        Le = t.n(Me),
        we = t(86),
        Ce = t.n(we);
      var ke = function (e) {
        var s = e.name,
          t = e.email,
          c = e.subject,
          a = e.message,
          n = e.time,
          j = Object(Ne.f)(),
          l = Object(i.b)();
        return Object(se.jsxs)("div", {
          className: "emailbody",
          onClick: function () {
            l(B({ name: s, subject: c, message: a, email: t, time: n })),
              j.push("/mail");
          },
          children: [
            Object(se.jsxs)("div", {
              className: "emailbody__left",
              children: [
                Object(se.jsx)(Se.a, {}),
                Object(se.jsx)(Le.a, {}),
                Object(se.jsx)(Ce.a, {}),
                Object(se.jsx)("h4", { children: s }),
              ],
            }),
            Object(se.jsx)("div", {
              className: "emailbody__middle",
              children: Object(se.jsx)("div", {
                className: "emailbody__middle__msg",
                children: Object(se.jsxs)("p", {
                  children: [Object(se.jsx)("b", { children: c }), " ", a],
                }),
              }),
            }),
            Object(se.jsx)("div", {
              className: "emailbody__right",
              children: Object(se.jsx)("p", { children: n }),
            }),
          ],
        });
      };
      var Re = function () {
          return Object(se.jsxs)("div", {
            className: "emailist__settings",
            children: [
              Object(se.jsxs)("div", {
                className: "emailist__settingsLeft",
                children: [
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(Se.a, {}) }),
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(x.a, {}) }),
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(le.a, {}) }),
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(E.a, {}) }),
                ],
              }),
              Object(se.jsxs)("div", {
                className: "emailist__settingsRight",
                children: [
                  Object(se.jsx)("p", { children: "1-50 of 10,222" }),
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(de.a, {}) }),
                  Object(se.jsx)(ce.a, { children: Object(se.jsx)(oe.a, {}) }),
                ],
              }),
            ],
          });
        },
        Ee = t(56),
        Ae = t.n(Ee),
        Pe = t(87),
        ze = t.n(Pe),
        De = t(88),
        Te = t.n(De);
      var Ue = function () {
        return Object(se.jsxs)("div", {
          class: "emailtype",
          children: [
            Object(se.jsxs)("div", {
              class: "emailtype__options emailtype__options--active",
              children: [
                Object(se.jsx)(Ae.a, {}),
                Object(se.jsx)("p", { children: "Primary" }),
              ],
            }),
            Object(se.jsxs)("div", {
              class: "emailtype__options",
              children: [
                Object(se.jsx)(ze.a, {}),
                Object(se.jsx)("p", { children: "Social" }),
              ],
            }),
            Object(se.jsxs)("div", {
              class: "emailtype__options",
              children: [
                Object(se.jsx)(Te.a, {}),
                Object(se.jsx)("p", { children: "Promotions" }),
              ],
            }),
          ],
        });
      };
      var qe = function () {
          var e = Object(c.useState)([]),
            s = Object(j.a)(e, 2),
            t = s[0],
            a = s[1];
          return (
            Object(c.useEffect)(function () {
              G.collection("emails")
                .orderBy("timestamp", "desc")
                .onSnapshot(function (e) {
                  a(
                    e.docs.map(function (e) {
                      return { id: e.id, data: e.data() };
                    })
                  );
                });
            }, []),
            Object(se.jsxs)("div", {
              className: "emaillist",
              children: [
                Object(se.jsx)(Re, {}),
                Object(se.jsx)(Ue, {}),
                t.map(function (e) {
                  var s,
                    t = e.id,
                    c = e.data;
                  return Object(se.jsx)(
                    ke,
                    {
                      name: c.fromName,
                      email: c.from,
                      subject: c.subject,
                      message: c.message,
                      time: new Date(
                        1e3 *
                          (null === (s = c.timestamp) || void 0 === s
                            ? void 0
                            : s.seconds)
                      ).toLocaleTimeString(),
                    },
                    t
                  );
                }),
              ],
            })
          );
        },
        Be = t(89),
        Fe = t.n(Be),
        Je = t(90),
        We = t.n(Je),
        Ye = t(57),
        Ge = t.n(Ye),
        He = t(91),
        Ve = t.n(He),
        Ke = t(92),
        Ze = t.n(Ke),
        Qe = t(93),
        Xe = t.n(Qe),
        $e =
          (t(124),
          function () {
            var e = Object(i.c)($);
            return Object(se.jsxs)("div", {
              className: "header",
              children: [
                Object(se.jsxs)("div", {
                  className: "header__left",
                  children: [
                    Object(se.jsx)(ce.a, {
                      children: Object(se.jsx)(Fe.a, {}),
                    }),
                    Object(se.jsx)("img", {
                      src: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png",
                      alt: "Logo",
                    }),
                  ],
                }),
                Object(se.jsx)("div", {
                  className: "header__middle",
                  children: Object(se.jsxs)("div", {
                    className: "search_mail",
                    children: [
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(We.a, {}),
                      }),
                      Object(se.jsx)("input", {
                        type: "text",
                        placeholder: "Search mail",
                      }),
                      Object(se.jsx)(ce.a, {
                        children: Object(se.jsx)(Ge.a, {}),
                      }),
                    ],
                  }),
                }),
                Object(se.jsxs)("div", {
                  className: "header__right",
                  children: [
                    Object(se.jsx)(ce.a, {
                      children: Object(se.jsx)(Ve.a, {}),
                    }),
                    Object(se.jsx)(ce.a, {
                      children: Object(se.jsx)(Ze.a, {}),
                    }),
                    Object(se.jsx)(ce.a, {
                      children: Object(se.jsx)(Xe.a, {}),
                    }),
                    Object(se.jsx)(ae.a, {
                      src: null === e || void 0 === e ? void 0 : e.photoURL,
                      onClick: function () {
                        return Y.a.auth().signOut();
                      },
                    }),
                  ],
                }),
              ],
            });
          }),
        es = t(143),
        ss = t(94),
        ts = t.n(ss);
      t(125), t(126);
      var cs = function (e) {
          var s = e.Icon,
            t = e.title,
            c = e.number,
            a = e.isactive;
          return Object(se.jsxs)("div", {
            className: "sidebarOptions ".concat(a && "sidebarOptions--active"),
            children: [
              Object(se.jsx)(s, {}),
              Object(se.jsx)("h4", { children: t }),
              Object(se.jsx)("p", { children: c }),
            ],
          });
        },
        as = t(95),
        ns = t.n(as),
        is = t(96),
        js = t.n(is),
        ls = t(97),
        rs = t.n(ls),
        ds = t(98),
        bs = t.n(ds),
        os = t(99),
        Os = t.n(os),
        ms = t(100),
        xs = t.n(ms),
        hs = t(101),
        us = t.n(hs),
        ps = t(102),
        vs = t.n(ps);
      var _s = function () {
          var e = Object(i.b)();
          return Object(se.jsxs)("div", {
            className: "sidebar",
            children: [
              Object(se.jsx)(es.a, {
                startIcon: Object(se.jsx)(ts.a, {}),
                className: "compose__btn",
                onClick: function () {
                  return e(U());
                },
                children: "Compose",
              }),
              Object(se.jsx)(cs, {
                Icon: Ae.a,
                title: "Inbox",
                number: "224",
                isactive: !0,
              }),
              Object(se.jsx)(cs, { Icon: ns.a, title: "Starred", number: 500 }),
              Object(se.jsx)(cs, { Icon: js.a, title: "Snoozed", number: 300 }),
              Object(se.jsx)(cs, {
                Icon: me.a,
                title: "Important",
                number: 452,
              }),
              Object(se.jsx)(cs, { Icon: rs.a, title: "Sent", number: 254 }),
              Object(se.jsx)(cs, { Icon: bs.a, title: "Drafts", number: 254 }),
              Object(se.jsx)(cs, {
                Icon: Os.a,
                title: "Category",
                number: 254,
              }),
              Object(se.jsx)(cs, {
                Icon: P.a,
                title: "[Map]/Trash",
                number: 254,
              }),
              Object(se.jsx)(cs, {
                Icon: xs.a,
                title: "Documents",
                number: 254,
              }),
              Object(se.jsx)(cs, { Icon: Ge.a, title: "More", number: 254 }),
              Object(se.jsx)("hr", {}),
              Object(se.jsx)("h3", {
                className: "sidebarOptions__heading",
                children: "Meet",
              }),
              Object(se.jsx)(cs, { Icon: us.a, title: "New meeting" }),
              Object(se.jsx)(cs, { Icon: vs.a, title: "Join a meeting" }),
            ],
          });
        },
        fs = t(47);
      t(127);
      var gs = function () {
        var e = Object(i.b)();
        return Object(se.jsx)("div", {
          className: "loginwrapper",
          children: Object(se.jsxs)("div", {
            className: "login",
            children: [
              Object(se.jsx)("img", {
                src: "https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg",
              }),
              Object(se.jsx)("button", {
                className: "gmail_login",
                onClick: function () {
                  H.signInWithPopup(V)
                    .then(function (s) {
                      var t = s.user;
                      e(
                        Q({
                          displayName: t.displayName,
                          photoURL: t.photoURL,
                          email: t.email,
                        })
                      );
                    })
                    .catch(function (e) {
                      alert(e);
                    });
                },
                children: "Login with Gmail",
              }),
            ],
          }),
        });
      };
      var Ns = function () {
          var e = Object(i.b)(),
            s = Object(i.c)(F),
            t = Object(i.c)($);
          return (
            Object(c.useEffect)(function () {
              H.onAuthStateChanged(function (s) {
                e(
                  s
                    ? Q({
                        displayName: s.displayName,
                        photoURL: s.photoURL,
                        email: s.email,
                      })
                    : X()
                );
              });
            }, []),
            Object(se.jsxs)(fs.a, {
              children: [
                t &&
                  Object(se.jsxs)("div", {
                    className: "App",
                    children: [
                      Object(se.jsx)($e, {}),
                      Object(se.jsxs)("div", {
                        className: "app__body",
                        children: [
                          Object(se.jsx)(_s, {}),
                          Object(se.jsxs)(Ne.c, {
                            children: [
                              Object(se.jsx)(Ne.a, {
                                exact: !0,
                                path: "/",
                                children: Object(se.jsx)(qe, {}),
                              }),
                              Object(se.jsx)(Ne.a, {
                                path: "/mail",
                                children: Object(se.jsx)(ye, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s && Object(se.jsx)(te, {}),
                    ],
                  }),
                " : ",
                Object(se.jsx)(gs, {}),
              ],
            })
          );
        },
        ys = Object(z.a)({ reducer: { mail: W, user: ee } });
      n.a.render(
        Object(se.jsx)(i.a, { store: ys, children: Object(se.jsx)(Ns, {}) }),
        document.getElementById("root")
      );
    },
    40: function (e, s, t) {},
  },
  [[128, 1, 2]],
]);
//# sourceMappingURL=main.8ebe8f0d.chunk.js.map
