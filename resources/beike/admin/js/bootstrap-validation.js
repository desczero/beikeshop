/*
 * @copyright     2022 beikeshop.com - All Rights Reserved.
 * @link          https://beikeshop.com
 * @Author        pu shuo <pushuo@guangda.work>
 * @Date          2022-08-17 15:42:46
 * @LastEditTime  2022-09-16 20:57:54
 */

// Example starter JavaScript for disabling form submissions if there are invalid fields
$(function () {
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        // 如果错误输入框在 tab 页面，则高亮显示对应的选项卡
        $('.invalid-feedback').each(function(index, el) {
          if ($(el).css('display') == 'block' && $(el).parents('.tab-pane')) {
            const id = $(el).parents('.tab-pane').prop('id');

            $(`a[href="#${id}"], button[data-bs-target="#${id}"]`).addClass('error-invalid');
          }
        });
      },
      false
    );
  });
});
