<template>
  <div :class="$style.conteiner">
    <div :class="$style.content">
      <div :class="$style.header">to do list</div>
      <div :class="$style.tasks">
        <label :class="$style.task">
          <input :class="$style.checkbox" type="checkbox" />
          <span :class="$style.fake"></span>
          <div :class="$style.text">Task1</div>
          <span :class="$style.cross"></span>
        </label>
        <label :class="$style.task">
          <input :class="$style.checkbox" type="checkbox" />
          <span :class="$style.fake"></span>
          <div :class="$style.text">
            task2 task 2task2 task2 task2 task2 task2 task2
          </div>
          <span :class="$style.cross"></span>
        </label>
        <label :class="$style.task">
          <input :class="$style.checkbox" type="checkbox" />
          <span :class="$style.fake"></span>
          <div :class="$style.text">Task3</div>
          <span :class="$style.cross"></span>
        </label>
        <input type="text" placeholder="add new task" :class="$style.input" />
      </div>
      <div :class="$style.footer">
        <div :class="$style.counter">1/3 left</div>
        <form :class="$style.menu">
          <label :class="$style.label">
            <input :class="$style.radio" type="radio" name="name" value="all" />
            <span :class="$style.fake"></span>
            <span :class="$style.item">All</span>
          </label>
          <label :class="$style.label">
            <input
              :class="$style.radio"
              type="radio"
              name="name"
              value="active"
            />
            <span :class="$style.fake"></span>
            <span :class="$style.item">Active</span>
          </label>
          <label :class="$style.label">
            <input
              :class="$style.radio"
              type="radio"
              name="name"
              value="completed"
            />
            <span :class="$style.fake"></span>
            <span :class="$style.item">Completed</span>
          </label>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@import "@/assets/styles/style.scss";
.conteiner {
  min-height: 100vh;
  background: linear-gradient(104.11deg, $C900 14.52%, $C400 87.26%);
  padding: 6.25rem 1.25rem;
  .content {
    max-width: 33.75rem;
    margin: 0 auto;
    .header {
      @include openSans;
      color: $C800;
      text-align: center;
      padding: 0.69rem 0;
      background-color: $C300;
    }
    .tasks {
      background-color: $white;
      padding: 1.88rem;
      .task {
        background: $C200;
        max-width: 30rem;
        margin: 0 auto 1.56rem auto;
        border-radius: 0.6rem;
        padding: 0 1.25rem;
        display: flex;
        .text {
          @include Inter;
          padding: 0.69rem 0;
          color: $C800;
          flex: 1 1 auto;
          max-width: 25rem;
        }
        .checkbox {
          display: none;
        }
        .fake {
          margin: 0 1.44rem 0 0;
          display: block;
          min-width: 1.5rem;
          height: 1.5rem;
          border: 0.09rem solid $C400;
          border-radius: 0.3rem;
          position: relative;
          top: 0.78rem;
          left: 0;
          cursor: pointer;
          &:before {
            content: "";
            position: absolute;
            top: 0.35rem;
            left: 0.25rem;
            opacity: 0;
            border: 0.125rem solid $white;
            border-top-color: $white;
            border-top-style: solid;
            border-top-width: 0.125rem;
            border-right-color: $white;
            border-right-style: solid;
            border-right-width: 0.125rem;
            border-top: none;
            border-right: none;
            transform: rotate(-45deg);
            width: 1rem;
            height: 0.5rem;
            transition: 0.2s;
          }
        }
        .cross {
          margin: 0 0 0 1.44rem;
          min-width: 1.5rem;
          height: 1.5rem;
          border: 0.125rem solid $C500;
          border-radius: 0.3rem;
          opacity: 0.5;
          position: relative;
          top: 0.8rem;
          cursor: pointer;
          &:hover {
            opacity: 1;
            border: 0.16rem solid $C500;
            &:before {
              top: 0.6rem;
              left: 0.22rem;
            }
            &:after {
              top: 0.6rem;
              left: 0.22rem;
            }
          }
          &:before {
            content: "";
            position: absolute;
            width: 0.8rem;
            height: 0.0625rem;
            top: 0.66rem;
            left: 0.25rem;
            transform: rotate(-45deg);
            background-color: $C500;
          }
          &:after {
            content: "";
            position: absolute;
            width: 0.8rem;
            height: 0.0625rem;
            top: 0.66rem;
            left: 0.25rem;
            transform: rotate(45deg);
            background-color: $C500;
          }
        }
        .checkbox:checked + .fake:before {
          opacity: 1;
        }
        .checkbox:checked + .fake {
          background-color: $C400;
        }
      }
      .input {
        width: 100%;
        @include Inter;
        color: $C800;
        text-align: center;
        background: $C200;
        border: 0.09rem dashed $C300;
        box-sizing: border-box;
        padding: 0.69rem 0;
        border-radius: 0.6rem;
        cursor: pointer;
      }
    }
    .footer {
      background: $C300;
      display: flex;
      justify-content: space-between;
      padding: 0.69rem 1.88rem;
      @media (max-width: 28.75rem) {
        padding: 0.69rem 0.6rem;
      }
      .counter {
        @include openSans;
        color: $rgba;
        @media (max-width: 25rem) {
          font-size: 1.13rem;
        }
        @media (max-width: 21.25rem) {
          font-size: 1rem;
        }
      }
      .menu {
        display: flex;
        .label {
          margin: 0 1.56rem 0 0;
          position: relative;
          cursor: pointer;
          &:last-child {
            margin: 0;
          }
          .item {
            @include openSans;
            color: $rgba;
            padding: 0.5rem;
            @media (max-width: 25rem) {
              font-size: 1.13rem;
              padding: 0.25rem;
            }
            @media (max-width: 21.25rem) {
              font-size: 1rem;
              padding: 0.25rem;
            }
          }
          .fake:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0.0625rem solid $rgba;
            border-radius: 0.3rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            padding: 0.69rem;
          }
          .radio {
            display: none;
          }
          @media (max-width: 28.75rem) {
            margin: 0 0.5rem 0 0;
          }
          @media (max-width: 25rem) {
            margin: 0;
          }
        }
      }
      .radio:checked + .fake:before {
        opacity: 1;
      }
    }
  }
}
</style>
