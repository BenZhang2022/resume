(function () {
  var toastTimer = null;
  var toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  function copyText(text, label) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast(label + "已复制");
        },
        function () {
          fallbackCopy(text, label);
        },
      );
      return;
    }
    fallbackCopy(text, label);
  }

  function fallbackCopy(text, label) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand("copy");
      showToast(label + "已复制");
    } catch (error) {
      showToast("复制失败，请手动复制");
    }
    document.body.removeChild(input);
  }

  document.querySelectorAll("[data-copy-target]").forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = button.getAttribute("data-copy-target");
      var target = targetId ? document.getElementById(targetId) : null;
      if (!target) return;
      copyText(target.textContent.trim(), targetId === "phone" ? "手机号" : "邮箱");
    });
  });

  ["printButton", "mobilePrintButton"].forEach(function (id) {
    var button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", function () {
        window.print();
      });
    }
  });

  var copyFitButton = document.getElementById("copyFitButton");
  var fitList = document.getElementById("fitList");
  if (copyFitButton && fitList) {
    copyFitButton.addEventListener("click", function () {
      var text = Array.prototype.map
        .call(fitList.querySelectorAll("li"), function (item) {
          return item.textContent.trim();
        })
        .join("\n");
      copyText(text, "匹配摘要");
    });
  }

  var topButton = document.getElementById("topButton");
  if (topButton) {
    topButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
