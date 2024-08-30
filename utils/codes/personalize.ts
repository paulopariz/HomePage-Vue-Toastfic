// eslint-disable-next-line quotes
export const personalize = `<Toast
    position="bottom-right"
    :classes="{
      toast: 'classe-toast',
      toasts: {
        success: 'classe-toast-success',
        error: 'classe-toast-error',
        info: 'classe-toast-info',
        warning: 'classe-toast-warning',
        default: 'classe-toast-default',
      },
      title: 'classe-title',
      description: 'classe-description',
      buttonHandle: 'classe-handle',
      buttonClose: 'classe-close',
      icon: 'classe-icon',
      icons: {
        success: 'classe-icon-success',
        error: 'classe-icon-error',
        info: 'classe-icon-info',
        warning: 'classe-icon-warning',
      },
    }"
  />`;

export const style = `.classe-toast {
  background-color: #000 !important;
  border-radius: 5px !important;
  border: 1px solid #181818;
  border-left-width: 2px !important;
  align-items: center !important;

  &:hover {
    border-radius: 10px !important;
    background-color: #080808 !important;
  }

  &-success {
    border-left-color: #28ab70;
  }

  &-error {
    border-left-color: #b42626;
  }

  &-info {
    border-left-color: #1976d2;
  }

  &-warning {
    border-left-color: #f57c00;
  }
}

.classe-title {
  letter-spacing: 0.5px;
  color: #fff !important;
  font-size: 13px !important;
}

.classe-description {
  color: #ebebeb !important;
  font-size: 13px !important;
}

.classe-handle {
  background-color: #fff;
  color: #111111 !important;
  padding: 3px 7px !important;
  border-radius: 3px;
  font-weight: 700 !important;
  font-size: 11px !important;
  text-decoration-line: none !important;
}

.classe-close {
  svg {
    fill: #ebebeb !important;
  }

  &:hover {
    background-color: #ffffff1f !important;
    rotate: 90deg;
  }
}

.classe-icon {
  width: 22px !important;
  height: 22px !important;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 !important;

  border-radius: 999px !important;

  svg {
    margin: 0 !important;
  }

  &-success {
    background-color: #20be2834 !important;
    box-shadow: 0px 3px 20px 2px #20be2856;

    svg {
      fill: #20be28 !important;
    }
  }

  &-error {
    background-color: #ec1f1f34 !important;
    box-shadow: 0px 3px 20px 2px #ec1f1f56;

    svg {
      fill: #ec1f1f !important;
    }
  }

  &-info {
    background-color: #2275c734 !important;
    box-shadow: 0px 3px 20px 2px #2275c756;

    svg {
      fill: #2275c7 !important;
    }
  }

  &-warning {
    background-color: #f1871c34 !important;
    box-shadow: 0px 3px 20px 2px #f1871c56;

    svg {
      fill: #f1871c !important;
    }
  }
}
`;
